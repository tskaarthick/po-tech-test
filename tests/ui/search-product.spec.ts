import { test } from "@playwright/test";
import { PageManager } from "../../pages/pageManager";

let pageManager: PageManager;

test.beforeEach(async ({ page }) => {
  pageManager = new PageManager(page);
  const amazonSearchPage = pageManager.getAmazonSearchPage();
  await amazonSearchPage.navigateToAmazon();
});

test.afterEach(async ({ page }) => {
  await page.context().close();
});

test("search for a product on Amazon", async () => {
  const amazonSearchPage = pageManager.getAmazonSearchPage();
  await amazonSearchPage.dismissDialogIfPresent();
  await amazonSearchPage.searchProduct("iphone");
  await amazonSearchPage.verifyFirstResultContainsText("Apple iPhone");
});
