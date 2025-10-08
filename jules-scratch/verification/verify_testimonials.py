from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the home page
        page.goto("http://localhost:4200")

        # Wait for the testimonials section to be visible
        testimonials_section = page.locator("section.testimonials")
        expect(testimonials_section).to_be_visible()

        # Wait for at least one testimonial card to be rendered
        testimonial_card = testimonials_section.locator(".card").first
        expect(testimonial_card).to_be_visible()

        # Take a screenshot of the testimonials section
        testimonials_section.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

if __name__ == "__main__":
    run_verification()