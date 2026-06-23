import puppeteer from "puppeteer-core";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT = "C:\\Users\\Abcom\\AppData\\Local\\Temp\\";
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});
async function grabFooter(page, file) {
  await page.evaluate(() => { document.documentElement.style.scrollBehavior = "auto"; window.scrollTo(0, document.body.scrollHeight); });
  await new Promise((r) => setTimeout(r, 700));
  const box = await page.evaluate(() => {
    const f = document.querySelector("footer").getBoundingClientRect();
    return { top: Math.max(0, Math.floor(f.top)), h: Math.ceil(f.height) };
  });
  await page.screenshot({ path: OUT + file, clip: { x: 0, y: box.top, width: page.viewport().width, height: Math.min(box.h, page.viewport().height - box.top) } });
}
const d = await browser.newPage();
await d.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
await d.goto("http://localhost:4173/", { waitUntil: "networkidle0" });
await grabFooter(d, "ft_desktop.png");
await d.close();
const m = await browser.newPage();
await m.setViewport({ width: 390, height: 800, deviceScaleFactor: 2 });
await m.goto("http://localhost:4173/", { waitUntil: "networkidle0" });
await grabFooter(m, "ft_mobile.png");
await m.close();
await browser.close();
console.log("done");
