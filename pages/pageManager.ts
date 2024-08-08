import { Page } from "@playwright/test";
import { AmazonSearchPage } from "./amazonSearchPage";

export class PageManager {
  private readonly page: Page;
  private readonly amazonSearchPage: AmazonSearchPage;

  constructor(page: Page) {
    this.page = page;
    this.amazonSearchPage = new AmazonSearchPage(this.page);
  }

  getAmazonSearchPage() {
    return this.amazonSearchPage;
  }
}
