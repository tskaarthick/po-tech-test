# Playwright Automation Framework

This project is a test automation framework built using Playwright, supporting both UI and API testing. It follows the Page Object Model (POM) design pattern.

## How to Clone the Code

To clone the repository, use the following command:

```bash
git clone https://github.com/tskaarthick/po-tech-test
cd po-tech-test
```

## Required Installations

After cloning the repository, install the necessary dependencies using npm:

```bash
npm install
```

## Design Pattern Used

This framework uses the Page Object Model (POM) design pattern. POM is a design pattern that creates Object Repository for web UI elements. It is useful for enhancing test maintenance and reducing code duplication. Each web page in the application is represented by a class. The class holds the functionality and members that represent the UI of that page.

## Environment Setup

- The `.env` file is used to specify the environment in which the tests should be run. Users can modify this file to switch between environments.
- The `config/environments.json` file contains the base URLs for different environments such as development, staging, and production.

## Running Tests

To execute the tests, use the following command:

```bash
npm run test
```

### Running Tests in Headed Mode

To run the tests in headed mode (with browser UI):

```bash
npm run test:headed
```

### Running Tests in UI Mode

To run the tests in UI mode, which provides a more interactive way to inspect and debug tests:

```bash
npm run test:ui
```

## Viewing Reports

Playwright generates an HTML report by default. To view the test reports, use the following command:

```bash
npm run show-report
```

This will open the HTML report in your default browser, providing a detailed view of the test results.

## Continuous Integration with GitHub Actions

This project includes a GitHub Actions workflow (`playwright.yml`) for running Playwright tests automatically. The workflow is triggered on the following events:

- Pushes to the `main` or `master` branches.
- Pull requests targeting the `main` or `master` branches.
- Manual triggering via the GitHub Actions interface.

### Manual Triggering

You can manually trigger the workflow from the GitHub Actions tab in your repository:

1. Navigate to the "Actions" tab.
2. Select the "Playwright Tests" workflow.
3. Click "Run workflow".
4. (Optional) Provide any input parameters, such as the environment in which to run the tests.

### Input Parameters

When manually triggering the workflow, you can specify input parameters:

```yaml
workflow_dispatch:
  inputs:
    environment:
      description: "Environment to run tests in"
      required: true
      default: "staging"
```

This allows you to customize the environment or other parameters when manually running the tests.

## Conclusion

This framework uses the Page Object Model (POM) to separate test logic from page-specific code, making tests more readable and maintainable. By configuring environments through the `.env` file and `environments.json`, it provides flexibility to run tests across different environments seamlessly.

Feel free to contribute by opening issues or submitting pull requests.
