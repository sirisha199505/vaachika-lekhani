import puppeteer from "puppeteer-core";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT = "C:\\Users\\Abcom\\AppData\\Local\\Temp\\";
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});
const p = await browser.newPage();
await p.setViewport({ width: 800, height: 360, deviceScaleFactor: 2 });
await p.goto("http://localhost:4173/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 700));
await p.screenshot({ path: `${OUT}logo_nav.png`, clip: { x: 0, y: 0, width: 420, height: 80 } });
await browser.close();
console.log("done");
