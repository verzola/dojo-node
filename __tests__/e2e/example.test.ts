import { test, expect } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The new page should contain an h1 with "About Page"
  await expect(page.locator(".HomePage")).toContainText("Welcome to Next.js!");
});
