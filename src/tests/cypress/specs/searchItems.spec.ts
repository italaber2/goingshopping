describe("Search functionality", () => {
  beforeEach(() => {
    cy.visit("https://goingshopping.vercel.app/");
  });

  context("Successful search", () => {
    it("renders the expected search result", () => {
      cy.get('[data-testid="app-title"]').should("be.visible");
    });
  });
  context("Unsuccessful search", () => {
    it("renders the incorrect results", () => {
      cy.get('[data-testid="app-title"]').should("be.visible");
    });
  });
});
