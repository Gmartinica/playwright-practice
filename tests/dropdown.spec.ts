import { expect, test } from "@playwright/test";

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
