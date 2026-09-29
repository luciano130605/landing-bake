import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:8081";
mkdirSync("screenshots", { recursive: true });

const browser = await chromium.launch();
const errors = [];
const report = {};

const p = await browser.newPage({ viewport: { width: 1280, height: 900 } });
p.on("console", (m) => m.type() === "error" && errors.push(m.text()));
p.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));

await p.goto(`${BASE}/box`, { waitUntil: "networkidle" });
await p.waitForTimeout(2500);
// cerrar el flyer del box y el de la promo (el de la promo queda arriba)
for (const name of [/off hoy en toda la carta/i, /Box especial/i]) {
  const dlg = p.getByRole("dialog", { name });
  if (await dlg.count()) {
    await dlg.getByRole("button", { name: "Cerrar" }).click();
    await p.waitForTimeout(600);
  }
}

// Chocotorta 18 cm = $50.000 (primer producto, segunda variante)
await p.locator("li", { hasText: "Chocotorta" }).first().getByText("18 cm").first().click();
await p.waitForTimeout(250);
await p.getByRole("button", { name: "Más" }).first().click();
await p.waitForTimeout(600);

report.boxSummary = await p.locator("dl").first().innerText();
await p.screenshot({ path: "screenshots/7-box-totals.png" });

// bandeja
await p.getByRole("button", { name: /Ver el pedido y mandarlo/i }).click();
await p.waitForTimeout(800);
report.tray = (await p.locator("aside[aria-label='Tu bandeja']").innerText()).slice(0, 600);
await p.screenshot({ path: "screenshots/8-tray.png" });

console.log(JSON.stringify({ ...report, errors }, null, 2));
await browser.close();