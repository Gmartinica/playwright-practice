import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { log } from "console";

const username = "standard_user";
const password = "secret_sauce";
const postLoginUrl = "https://www.saucedemo.com/inventory.html";

test("Logging in", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginWithCredentials(username, password);
    await expect(page).toHaveURL(postLoginUrl);
});
