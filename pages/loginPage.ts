import { expect, type Locator, type Page } from "@playwright/test";
export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }
    async goToUrl() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async loginWithCredentials(username: string, password: string) {
        await this.goToUrl();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
