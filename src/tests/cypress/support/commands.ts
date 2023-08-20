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
      command(): void;
    }
  }
}

Cypress.Commands.add("command", () => {
  cy.visit("https://www.google.com");
});
