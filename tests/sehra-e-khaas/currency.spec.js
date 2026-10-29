const { test, expect } = require('@playwright/test');

test('BUG-04: prices change to EUR after selecting EUR', async ({ page }) => {
  await page.goto('https://sehra-e-khaas.com/');

  // Select EUR in the currency widget
  await page.getByRole('button', { name: 'PK / PKR' }).click();
  await page.getByRole('button', { name: 'BE / EUR Euro' }).click();

  // Expected: product prices are shown in EUR
  await expect(page.locator('.sek-card__price').first()).toContainText('€');
});