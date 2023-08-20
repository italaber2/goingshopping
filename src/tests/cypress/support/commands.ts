/// <reference types="cypress" />
export {};
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

declare global {
  namespace Cypress {
    interface Chainable {
      checkExpectedSearchResults(): void;
      searchForItem(itemName: string): Chainable;
      addItemAndQuantity(itemName: string, quantity: number): void;
      confirmItemAndQuantity(itemName: string, quantity: number): void;
      removeItemsFromBasket(quantity: number): void;
    }
  }
}

Cypress.Commands.add("checkExpectedSearchResults", () => {
  cy.fixture("inventory").then((inventory) => {
    let i = 0;
    const inventoryNamesArray: string[] = inventory.map(
      (item: any) => item.name
    );
    while (i < inventory.length) {
      cy.get('[data-testid="search-bar"]').click().type(inventoryNamesArray[i]);
      cy.get('[data-testid="product-name"]')
        .invoke("text")
        .should("eq", inventoryNamesArray[i]);
      cy.get('[data-testid="search-bar"]').clear();
      i++;
    }
  });
});

Cypress.Commands.add("searchForItem", (itemName) => {
  cy.get('[data-testid="search-bar"]').click().type(itemName);
});

Cypress.Commands.add("addItemAndQuantity", (itemName, quantity) => {
  cy.get('[data-testid="search-bar"]').click().type(itemName);
  for (let n = 0; n < quantity; n++) {
    cy.get('[data-testid="add-to-basket-button"]').click();
  }
  cy.get('[data-testid="search-bar"]').clear();
});

Cypress.Commands.add("confirmItemAndQuantity", (itemName, quantity) => {
  cy.get('[data-testid="view-basket-item-description"]')
    .find(`div:contains("${itemName}")`)
    .should("have.length", quantity);
});

Cypress.Commands.add("removeItemsFromBasket", (quantity) => {
  for (let n = 0; n < quantity; n++) {
    cy.get('[data-testid="view-basket-remove-button"]').first().click();
  }
});
