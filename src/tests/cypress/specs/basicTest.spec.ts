describe("Website load", () => {
  beforeEach(() => {
    cy.visit("https://goingshopping.vercel.app/");
  });
  it("opens the website", () => {
    cy.get('[data-testid="app-title"]').should("be.visible");
  });
  it("opens another website", () => {
    cy.fixture("inventory").then((inventory) => {
      console.log(inventory[0]);
    });
  });
});
