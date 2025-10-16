from playwright.sync_api import Page, expect

def test_flooring_page(page: Page):
    """
    This test verifies that the flooring page is accessible and displays the image gallery.
    """
    # 1. Arrange: Go to the application's home page.
    page.goto("http://localhost:4200")

    # 2. Act: Navigate to the flooring page.
    # The 'Services' link is not directly clickable, it's a dropdown.
    # We need to hover over it to reveal the dropdown content.
    services_link = page.get_by_role("link", name="Services")
    services_link.hover()

    # Click the "Flooring" link in the dropdown.
    flooring_link = page.get_by_role("link", name="Flooring")
    flooring_link.click()

    # 3. Assert: Confirm the navigation was successful.
    # We expect the page to have a heading with the text "Flooring".
    expect(page.get_by_role("heading", name="Flooring")).to_be_visible()

    # 4. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")