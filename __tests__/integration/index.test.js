import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains the welcome text", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".HomePage");
    const text = await page.$eval(".HomePage", (e) => e.textContent);
    expect(text).toContain("Welcome to Next.js!");
  });

  afterAll(() => browser.close());
});
