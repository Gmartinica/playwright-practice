import { chromium, test } from "@playwright/test";
import { brotliCompress } from "zlib";

test("Login test demo", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io");
    await page.hover(
        "//a[@data-toggle='dropdown']//span[text()[normalize-space()='My account']]"
    );
    await page.click("//span[text()[normalize-space()='Login']]");

    await page.fill("input[name='email']", "test@gmail.com");
    await page.fill("input[name='password']", "password");
    await page.click("input[value='Login']");
});
