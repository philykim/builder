import pytest
from playwright.sync_api import Page, expect

def test_bathroom_remodeling_images(page: Page):
    """
    This test verifies that the new bathroom remodeling images are displayed on the page.
    """
    console_logs = []
    page.on("console", lambda msg: console_logs.append(msg.text))

    try:
        # 1. Arrange: Go to the bathroom remodeling page.
        page.goto("http://localhost:4200/bathroom-remodeling")

        # 2. Assert: Confirm that at least one of the new images is visible.
        # We'll check for the first new image.
        new_image = page.locator('img[src="assets/images/bathroom-remodeling/bathroom-remodeling-1.webp"]')
        expect(new_image).to_be_visible(timeout=10000)

        # 3. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/verification.png")
    finally:
        print("\n--- Console Logs ---")
        for log in console_logs:
            print(log)
        print("--------------------")