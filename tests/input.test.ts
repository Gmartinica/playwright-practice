import { expect, test } from "@playwright/test";
import exp from "constants";

test("Username Interaction", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/automation-demos");
    const usernameField = page.locator("#username");
    await expect(usernameField).toHaveId("username");
    console.log(await usernameField.inputValue());
    await usernameField.type("GamaRocks");
    await expect(usernameField).toHaveText("GamaRocks");
});
