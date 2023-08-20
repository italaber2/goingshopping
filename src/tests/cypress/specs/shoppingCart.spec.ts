describe("Shopping cart layer", () => {
  beforeEach(() => {
    cy.visit("https://goingshopping.vercel.app/");
  });

  context("Adding items", () => {
    it("display added items and total item quantity", () => {
      cy.addItemAndQuantity("honeydew", 3);
      cy.addItemAndQuantity("cherry", 2);
      cy.addItemAndQuantity("elderberry", 1);
      cy.get('[data-testid="view-basket-button"]').should("be.visible").click();
      cy.confirmItemAndQuantity("Honeydew", 3);
      cy.confirmItemAndQuantity("Cherry", 2);
      cy.confirmItemAndQuantity("Elderberry", 1);
    });
  });

  context("Removing items", () => {
    it("removes selected items from the basket", () => {
      cy.addItemAndQuantity("banana", 1);
      cy.addItemAndQuantity("date", 3);
      cy.addItemAndQuantity("grape", 2);
      cy.get('[data-testid="view-basket-button"]').should("be.visible").click();
      cy.removeItemsFromBasket(3);
    });
  });
});
