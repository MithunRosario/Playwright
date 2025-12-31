import { test, expect } from '@playwright/test';

test('Drag slider to 95', async ({ page }) => {
  await page.goto('/selenium-playground');
  await page.click('text=Drag & Drop Sliders');

  const slider = page.locator('input[value="15"]');
  await slider.focus();
  await slider.press('ArrowRight'.repeat(80));

  await expect(page.locator('#rangeSuccess')).toHaveText('95');
});