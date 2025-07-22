describe("Product Filtering and Search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("should filter products when a user types in the search box", () => {
    cy.get('[data-test-id="search-input"]').type("Bitter");
    cy.contains("Victoria Bitter").should("be.visible");
  });
});
