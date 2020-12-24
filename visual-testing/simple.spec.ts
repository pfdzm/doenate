import { it, expect } from '@playwright/test'

it('compares page screenshot', async ({ page, browserName }) => {
  await page.goto('http://localhost:3000')
  const screenshot = await page.screenshot()
  expect(screenshot).toMatchSnapshot(`test-${browserName}.png`, {
    threshold: 0.2,
  })
})
