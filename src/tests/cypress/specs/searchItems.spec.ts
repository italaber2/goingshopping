describe("Search functionality", () => {
  beforeEach(() => {
    cy.visit("https://goingshopping.vercel.app/");
  });

  context("Successful search", () => {
    it("search for a specific item and display the expected search result", () => {
      cy.checkExpectedSearchResults();
    });

    it("search for an item and open the view product details layer", () => {
      cy.searchForItem("date");
      cy.get('[data-testid="view-product-details-button"]').click();
      cy.get('[data-testid="product-details-layer"]').should("be.visible");
    });

    it("search for an item and add it to the basket", () => {
      cy.searchForItem("apple");
      cy.get('[data-testid="add-to-basket-button"]').click();
      cy.get('[data-testid="current-cart-count"]')
        .invoke("text")
        .should("eq", "1");
    });
  });

  context("Unsuccessful search", () => {
    it("search for an unavailable item and display the expected search result", () => {
      cy.searchForItem("hotdog");
      cy.get('[data-testid="no-result-text"]')
        .should("be.visible")
        .should("not.be.empty");
    });
  });
});
