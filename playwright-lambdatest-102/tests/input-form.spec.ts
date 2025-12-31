import { test, expect } from '@playwright/test';

test('Input Form Submit', async ({ page }) => {
  await page.goto('/selenium-playground');
  await page.click('text=Input Form Submit');

  await page.click('button[type="submit"]');
  await expect(page.locator('input[name="name"]'))
    .toHaveAttribute('validationMessage', 'Please fill out this field.');

  await page.fill('input[name="name"]', 'Mithun');
  await page.fill('input[name="email"]', 'test@test.com');
  await page.fill('input[name="password"]', 'Test@123');
  await page.fill('input[name="company"]', 'LambdaTest');
  await page.selectOption('select[name="country"]', { label: 'United States' });
  await page.fill('input[name="city"]', 'New York');
  await page.fill('input[name="address_line1"]', 'Street 1');
  await page.fill('input[name="address_line2"]', 'Street 2');
  await page.fill('input[name="state"]', 'NY');
  await page.fill('input[name="zip"]', '10001');

  await page.click('button[type="submit"]');
  await expect(page.locator('.success-msg'))
    .toHaveText('Thanks for contacting us, we will get back to you shortly.');
});