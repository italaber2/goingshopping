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
    }
  }
}

Cypress.Commands.add("checkExpectedSearchResults", () => {
  cy.fixture("inventory").then((inventory) => {
    let i = 0;
    const namesArray: string[] = inventory.map((item: any) => item.name);
    // console.log(namesArray);
    while (i < inventory.length) {
      console.log(namesArray[i]);
      cy.get('[data-testid="search-bar"]').click().type(namesArray[i]);
      cy.get('[data-testid="search-bar"]').clear();
      i++;
    }
  });
});
