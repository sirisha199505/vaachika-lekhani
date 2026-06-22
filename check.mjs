import puppeteer from "puppeteer-core";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT = "C:\\Users\\Abcom\\AppData\\Local\\Temp\\";
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});
const p = await browser.newPage();
await p.setViewport({ width: 1440, height: 860, deviceScaleFactor: 1 });
await p.goto("http://localhost:4173/", { waitUntil: "networkidle0" });
await p.evaluate(() => document.getElementById("cta").scrollIntoView({ block: "center" }));
await new Promise((r) => setTimeout(r, 1300));
await p.screenshot({ path: `${OUT}fin_cta.png` });
await browser.close();
console.log("done");
