beforeEach(() => {
  cy.visit("http://localhost:5173/");
  cy.contains("ACIKTIM").click();
});

describe("Sipariş Alanına Geçiş", () => {
  it("passes", () => {
    cy.url().should("include", "/order");
  });
});

describe("Not Giriş Kriteri", () => {
  it("passes", () => {
    cy.get('[data-cy="orderNotes"]').type("ab");
    cy.get('[data-cy="orderNoteError"]').should(
      "contain",
      "Lütfen en az 3 kelimelik bir not ekleyiniz"
    );
    cy.get('[data-cy="orderNotes"]').clear().type("abc");
    cy.get('[data-cy="orderNoteError"]').should("not.exist");
  });
});

describe("Pizza Boyut Seçimi", () => {
  it("passes", () => {
    cy.get('[data-cy="orderButton"]').should("be.disabled");
    cy.get('[data-cy="radioSizeSmall"]').check();
    cy.get('[data-cy="orderSizeError"]').should("not.exist");
  });
});

describe("Pizza Ek Malzeme Seçimi", () => {
  it("passes", () => {
    cy.get('[data-cy="orderButton"]').should("be.disabled");
    cy.get('[data-cy="topping-1"]').check();
    cy.get('[data-cy="topping-2"]').check();
    cy.get('[data-cy="topping-5"]').check();
    cy.get('[data-cy="topping-10"]').check();
    cy.get('[data-cy="orderToppingError"]').should("not.exist");
  });
});

describe("Pizza Türü Seçimi", () => {
  it("passes", () => {
    cy.get('[data-cy="orderButton"]').should("be.disabled");
    cy.get('[data-cy="pizzaTypeDrop"]').click();
    cy.get('[data-cy="pizzaType1"]').click();
    cy.get('[data-cy="orderTypeError"]').should("not.exist");
  });
});

describe("Pizza Hamur Seçimi", () => {
  it("passes", () => {
    cy.get('[data-cy="orderButton"]').should("be.disabled");
    cy.get('[data-cy="pizzaCrustDrop"]').click();
    cy.get('[data-cy="pizzaCrust4"]').click();
    cy.get('[data-cy="orderCrustError"]').should("not.exist");
  });
});

describe("Pizza Siparişi", () => {
  it("passes", () => {
    cy.get('[data-cy="orderButton"]').should("be.disabled");
    cy.get('[data-cy="pizzaCrustDrop"]').click();
    cy.get('[data-cy="pizzaCrust4"]').click();
    cy.get('[data-cy="pizzaTypeDrop"]').click();
    cy.get('[data-cy="pizzaType1"]').click();
    cy.get('[data-cy="topping-1"]').check();
    cy.get('[data-cy="topping-2"]').check();
    cy.get('[data-cy="topping-5"]').check();
    cy.get('[data-cy="topping-10"]').check();
    cy.get('[data-cy="radioSizeSmall"]').check();
    cy.get('[data-cy="orderNotes"]').clear().type("abc");
    cy.get('[data-cy="orderButton"]').should("not.be.disabled");
    cy.get('[data-cy="orderButton"]').click();
    cy.url().should("include", "/orderComplete");
  });
});

// cy.get('[data-cy="orderButton"]').should("be.disabled");
