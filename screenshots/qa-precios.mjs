import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:8081";
mkdirSync("screenshots", { recursive: true });

const browser = await chromium.launch();
const errors = [];
const report = {};

async function fresh() {
  const p = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  p.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  p.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  await p.addInitScript(() => {
    localStorage.clear();
    localStorage.setItem("bake-valentine-box-preview", "1");
  });
  return p;
}

async function closeModals(p) {
  for (const name of [/off hoy en toda la carta/i, /Box especial/i]) {
    const dlg = p.getByRole("dialog", { name });
    if (await dlg.count()) {
      await dlg.getByRole("button", { name: "Cerrar" }).click();
      await p.waitForTimeout(600);
    }
  }
}

// --- 1) BOX con Chocotorta 18cm ($50.000) y el 10% activo ---
const box = await fresh();
await box.goto(`${BASE}/box`, { waitUntil: "networkidle" });
await box.waitForTimeout(2500);
await closeModals(box);
await box.locator("li", { hasText: "Chocotorta" }).first().getByText("18 cm").first().click();
await box.waitForTimeout(250);
await box.getByRole("button", { name: "Más" }).first().click();
await box.waitForTimeout(600);
report.box_conPromo = await box.locator("dl").first().innerText();
await box.screenshot({ path: "screenshots/9-box-con-promo.png" });

await box.getByRole("button", { name: /Ver el pedido y mandarlo/i }).click();
await box.waitForTimeout(900);
report.tray_box_conPromo = (await box.locator("aside[aria-label='Tu bandeja']").innerText())
  .split("\n")
  .filter((l) => l.trim())
  .join(" | ");

// --- 2) BOX sin promo (PROMO apagada por localStorage no se puede: es constante),
//        así que probamos el caso base: un producto barato sin descuento aplicable ---
const box2 = await fresh();
await box2.goto(`${BASE}/box`, { waitUntil: "networkidle" });
await box2.waitForTimeout(2500);
await closeModals(box2);
await box2.locator("li", { hasText: "Lemon pie" }).first().getByText("10cm").first().click();
await box2.waitForTimeout(250);
await box2.getByRole("button", { name: "Más" }).first().click();
await box2.waitForTimeout(600);
report.box_lemon = await box2.locator("dl").first().innerText();

// --- 3) PRODUCTO normal desde la home (mismo criterio) ---
const home = await fresh();
await home.goto(BASE, { waitUntil: "networkidle" });
await home.waitForTimeout(2200);
await closeModals(home);
await home.getByRole("button", { name: "Sumar" }).first().click();
await home.waitForTimeout(800);
await home.getByRole("button", { name: /Tu bandeja/i }).click();
await home.waitForTimeout(900);
report.tray_producto_normal = (await home.locator("aside[aria-label='Tu bandeja']").innerText())
  .split("\n")
  .filter((l) => l.trim())
  .join(" | ");
await home.screenshot({ path: "screenshots/10-tray-producto.png" });

console.log(JSON.stringify({ ...report, errors }, null, 2));
await browser.close();