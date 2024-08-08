import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class AmazonSearchPage extends BasePage {
  private searchBox: string;
  private searchButton: string;
  private firstResult: string;

  constructor(page: Page) {
    super(page);
    this.searchBox = 'input[name="field-keywords"]';
    this.searchButton = 'input[id="nav-search-submit-button"]';
    this.firstResult =
      'div[data-cy="title-recipe"] span.a-size-medium.a-color-base.a-text-normal';
  }

  /**
   * Dismisses the dialog box if it appears.
   */
  async dismissDialogIfPresent() {
    try {
      const dialogBox = await this.page.waitForSelector(
        ".glow-toaster-content",
        { timeout: 5000 }
      );
      if (dialogBox) {
        const dismissButton = this.page.locator(
          ".glow-toaster-button-dismiss .a-button-input"
        );
        await dismissButton.click();
      }
    } catch (error) {
      console.log("No dialog box appeared.");
    }
  }

  /**
   * Searches for a product using the search box.
   * @param {string} product - The name of the product to search for.
   */
  async searchProduct(product: string) {
    await this.page.locator(this.searchBox).fill(product);
    await this.page.locator(this.searchButton).click();
  }

  /**
   * Verifies that the first search result contains the specified text.
   * @param {string} text - The text to verify in the first search result.
   */
  async verifyFirstResultContainsText(text: string) {
    const firstResult = this.page.locator(this.firstResult).first();
    await expect(firstResult).toContainText(text);
  }
}
