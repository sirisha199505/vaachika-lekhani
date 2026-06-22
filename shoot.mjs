import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT = "C:\\Users\\Abcom\\AppData\\Local\\Temp\\";

const widths = [
  { w: 1920, h: 1080, tag: "xl" },
  { w: 1024, h: 768, tag: "tab" },
  { w: 768, h: 1024, tag: "tabP" },
  { w: 360, h: 740, tag: "sm" },
];

const sections = ["top", "meaning", "practice", "features", "mantras", "progress", "languages", "movement", "privacy", "about", "cta"];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});

for (const { w, h, tag } of widths) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
  await page.goto("http://localhost:4173/", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 700));
  for (const id of sections) {
    await page.evaluate((sel) => {
      document.getElementById(sel)?.scrollIntoView({ block: "start" });
    }, id);
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: `${OUT}r_${tag}_${id}.png` });
  }
  await page.close();
  console.log("done", tag);
}
await browser.close();
console.log("ALL DONE");
