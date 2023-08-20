describe("Browse functionality", () => {
  beforeEach(() => {
    cy.visit("https://goingshopping.vercel.app/");
  });

  context("Browsing inventory", () => {
    it("display a maximum of three items per page", () => {
      cy.get('[data-testid="product-card"]').should("have.length.at.most", 3);
      cy.get('[data-testid="pagination-page-button"]').contains(2).click();
      cy.get('[data-testid="product-card"]').should("have.length.at.most", 3);
      cy.get('[data-testid="pagination-page-button"]').contains(3).click();
      cy.get('[data-testid="product-card"]').should("have.length.at.most", 3);
    });
  });
});
