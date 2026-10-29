# QA Testing Portfolio

I'm a Software Engineering graduate learning QA testing and test automation. This repo is my practice project, and I'm adding to it as I learn.

## What's in this repo
- **Playwright tests (JavaScript)** for the SauceDemo practice site: login (valid and invalid) and add to cart.

## How to run
1. Install Node.js
2. Run `npm install`
3. Run `npx playwright install`
4. Run `npx playwright test`

## What I'm learning next
- Writing test cases and bug reports for more flows (cart, checkout)
- Page Object Model
- More Playwright features (fixtures, reports)

Sehra-e-khaas 
## Live site testing: Sehra e Khaas (with client's permission)
- `tests/sehra-e-khaas/currency.spec.js`: checks that selecting a currency changes the displayed prices.
- This test currently fails because the bug it checks for (BUG-04) is still present on the site.
