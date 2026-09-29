import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:8081";
mkdirSync("screenshots", { recursive: true });

const browser = await chromium.launch();
const errors = [];
const report = {};

async function page(viewport) {
  const p = await browser.newPage({ viewport });
  p.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  p.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  return p;
}

// ---------- Home (desktop) ----------
const home = await page({ width: 1280, height: 900 });
await home.goto(BASE, { waitUntil: "networkidle" });
await home.waitForTimeout(2000);
report.homeText = (await home.locator("body").innerText()).slice(0, 400);
await home.screenshot({ path: "screenshots/1-home.png" });
await home.keyboard.press("Escape");
await home.waitForTimeout(400);

// Teaser del box -> /box
await home.getByText("Armá tu box", { exact: false }).first().click();
await home.waitForTimeout(1200);
report.boxUrl = home.url();
// el flier del box se abre solo en su página: lo cerramos
await home
  .getByRole("dialog", { name: /Box especial/i })
  .getByRole("button", { name: "Cerrar" })
  .click();
await home.waitForTimeout(600);
await home.screenshot({ path: "screenshots/2-box-page.png" });

// ---------- Elegir productos en el box ----------
await home.getByRole("button", { name: "Más" }).first().click();
await home.waitForTimeout(300);
await home.getByRole("button", { name: "Más" }).nth(1).click();
await home.waitForTimeout(500);
await home.screenshot({ path: "screenshots/3-box-picked.png" });
report.boxTotals = await home.locator("dl").last().innerText();

// Bandeja en modo box
await home.getByRole("button", { name: /Ver el pedido y mandarlo/i }).click();
await home.waitForTimeout(800);
await home.screenshot({ path: "screenshots/4-box-tray.png" });
report.boxTray = (await home.locator("aside[aria-label='Tu bandeja']").innerText()).slice(0, 500);

// ---------- Mobile ----------
const mob = await page({ width: 390, height: 844 });
await mob.goto(`${BASE}/box`, { waitUntil: "networkidle" });
await mob.waitForTimeout(1500);
await mob.screenshot({ path: "screenshots/5-box-mobile.png" });
report.mobileOverflow = (await mob.evaluate(() => document.documentElement.scrollWidth)) > 390;

// ---------- Flier del box ----------
const flier = await page({ width: 1280, height: 900 });
await flier.goto(`${BASE}/box`, { waitUntil: "networkidle" });
await flier.waitForTimeout(2600);
report.flierOpen = await flier.getByRole("dialog", { name: /Box especial/i }).count();
await flier.screenshot({ path: "screenshots/6-box-flier.png" });
await flier
  .getByRole("dialog", { name: /Box especial/i })
  .getByRole("button", { name: "Cerrar" })
  .click();
await flier.waitForTimeout(500);

console.log(JSON.stringify({ ...report, errors }, null, 2));
await browser.close();