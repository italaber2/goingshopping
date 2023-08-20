describe("Website load", () => {
  // beforeEach(() => {
  //   cy.interceptGraph();
  //   cy.wait(500);
  // });
  it("opens the website", () => {
    cy.visit("https://goingshopping.vercel.app/");
    cy.get('[data-testid="app-title"]').should("be.visible");
  });
});
