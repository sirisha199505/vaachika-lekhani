import puppeteer from "puppeteer-core";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT = "C:\\Users\\Abcom\\AppData\\Local\\Temp\\";
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});
const p = await browser.newPage();
await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await p.goto("http://localhost:4173/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1200));
await p.screenshot({ path: `${OUT}fin_hero.png` });
await p.setViewport({ width: 390, height: 844, deviceScaleFactor: 1.5 });
await p.goto("http://localhost:4173/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1000));
await p.screenshot({ path: `${OUT}fin_mob.png` });
await browser.close();
console.log("done");
