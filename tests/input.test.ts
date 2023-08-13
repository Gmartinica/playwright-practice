import { expect, test } from "@playwright/test";

test("Username Interaction", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/automation-demos");
    const usernameField = page.locator("#username");
    await expect(usernameField).toHaveId("username");
    console.log(await usernameField.inputValue());
    await usernameField.type("GamaRocks");
    const value = await expect(usernameField).toHaveValue("GamaRocks");
});

test("Sum", async ({ page }) => {
    await page.goto(
        "https://www.lambdatest.com/selenium-playground/simple-form-demo"
    );
    const sumInput1 = page.locator("#sum1");
    const sumInput2 = page.locator("#sum2");

    const num1 = 111;
    const num2 = 224;
    const result = num1 + num2;

    const getValuesBtn = page.locator("//button[text()='Get Sum']");
    await sumInput1.type(`${num1}`);
    await sumInput2.type(`${num2}`);

    await getValuesBtn.click();

    const sumResult = page.locator("#addmessage");
    await expect(sumResult).toContainText(`${result}`);
});
