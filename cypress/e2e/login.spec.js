describe("When user is on login page, user", () => {
    it("Should be able to open the main page", () => {
        cy.visit('');
        cy.contains("Books list");
    });

    it("Should be able to login with correct email and password", () => {
        cy.visit('');
        cy.login("test@test.com", "test");
        cy.contains("Добро пожаловать test@test.com");
    });

    it("Should not be able to login with empty email", () => {
        cy.visit('');
        cy.login(" ", "a1a2a3");
        cy.get("#mail").then(($el) => cy.log($el));
        cy.get("#mail")
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
    });
});