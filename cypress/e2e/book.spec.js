describe("When user add the books", () => {

    it("Should be able to add a book", () => {
        cy.visit(' ');
        cy.login("test@test.com", "test");
        cy.typeForm(
            "Test book",
            "Vasilii",
            "Vasilii"
        );
        cy.contains("Submit").click();
        cy.contains("Test book");
    });
  
    it("Should be able to add a book to favorite", () => {
        cy.visit(' ');
        cy.login("test@test.com", "test");
        cy.get(".card-body").contains("Test book").parent().siblings().children("button").click();
        cy.contains("Favorites").click();
        cy.contains("Test book");
    });
    
    it("Should be able to delete a book from favorite", () => {
        cy.visit(' ');
        cy.login("test@test.com", "test");
        cy.contains("Favorites").click();
        cy.get(".card-body").contains("Test book").parent().siblings().children("button").click();
        cy.contains("Please add some book to favorit on home page!");
    });

    it("Should be close add book form", () => {
        cy.visit(' ');
        cy.login("test@test.com", "test");
        cy.typeForm(
            "Qwer", 
            " ", 
            " "
        );
        cy.contains("Cancel").click();
        cy.contains("Books list");
    });
   
})