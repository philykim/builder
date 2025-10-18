describe('Taggart Building App', () => {
  it('should display the home page', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Taggart Building');
  });
});