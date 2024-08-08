import { Page } from "@playwright/test";
import { getConfig } from "../utils/configReader";

export class BasePage {
  protected page: Page;
  protected baseUrl: string;

  constructor(page: Page) {
    this.page = page;
    const config = getConfig();
    this.baseUrl = config.baseUrl;
  }

  /**
   * Navigates to a specified URL.
   * @param {string} url - The URL to navigate to.
   */
  async navigate(url: string) {
    await this.page.goto(url);
  }

  /**
   * Navigates to the Amazon homepage.
   */
  async navigateToAmazon() {
    await this.navigate(this.baseUrl);
  }
}
