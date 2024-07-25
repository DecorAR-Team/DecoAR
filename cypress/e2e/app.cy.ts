describe('Navigation', () => {
  it('should navigate to the product detail page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="s19384116"]').click({ force: true });
    cy.url().should('include', 's19384116');
    cy.get('h1').contains('UPPLAND');
  });
});
