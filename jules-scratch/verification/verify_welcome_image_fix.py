from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    page.goto("http://localhost:4200")
    welcome_section = page.locator("section.welcome")
    welcome_section.scroll_into_view_if_needed()
    page.screenshot(path="jules-scratch/verification/welcome_image_fix.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)