import { expect, test } from "@playwright/test";
import { countReset } from "console";

test("Handle dropdown", async ({ page }) => {
    await page.goto(
        "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
    );
    await page.selectOption("#select-demo", {
        value: "Friday",
    });

    await page.selectOption("#multi-select", [
        {
            label: "Texas",
        },
        {
            index: 2,
        },
    ]);
});

test("Bootstrap dropdown", async ({ page }) => {
    await page.goto(
        "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
    );
    await page.click("#country+span");
    await page
        .locator("ul#select2-country-results")
        .locator("li", {
            hasText: "Denmark",
        })
        .click();

    const countryLocator = page.locator("#select2-country-container");
    await expect(countryLocator).toHaveAttribute("title", "Denmark");
});
