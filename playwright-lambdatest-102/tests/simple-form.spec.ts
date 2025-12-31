import { test, expect } from '@playwright/test';

test('Simple Form Demo', async ({ page }) => {
  await page.goto('/selenium-playground');
  await page.click('text=Simple Form Demo');
  await expect(page).toHaveURL(/simple-form-demo/);

  const message = 'Welcome to LambdaTest';
  await page.fill('#user-message', message);
  await page.click('#showInput');
  await expect(page.locator('#message')).toHaveText(message);
});