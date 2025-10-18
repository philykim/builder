from playwright.sync_api import Page, expect

def test_kitchen_images(page: Page):
    """
    This test verifies that the new kitchen images are displayed on the kitchen remodeling page.
    """
    # 1. Arrange: Go to the kitchen remodeling page.
    page.goto("http://localhost:4200/kitchen-remodeling")

    # 2. Assert: Check that the new images are present.
    expect(page.locator('img[src="assets/images/kitchen-remodeling/kitchen-9.png"]')).to_be_visible()
    expect(page.locator('img[src="assets/images/kitchen-remodeling/kitchen-10.png"]')).to_be_visible()
    expect(page.locator('img[src="assets/images/kitchen-remodeling/kitchen-11.jpg"]')).to_be_visible()

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")