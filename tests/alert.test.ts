import { expect, test } from "@playwright/test";

test("Handle alerts", async ({ page }) => {
    await page.goto(
        "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
    );
    await page.locator("button:has-text('Click me')").nth(0).click();
});
