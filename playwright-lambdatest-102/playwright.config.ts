import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  workers: 2,
  use: {
    headless: true,
    screenshot: 'on',
    video: 'on',
    trace: 'on',
    baseURL: process.env.BASE_URL || 'https://www.lambdatest.com'
  }
});