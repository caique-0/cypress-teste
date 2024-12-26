describe('Funcionalidade pesquisa e adicionando produto', () => {
    it('Localizar um tipo de produto e adicionando ao carrinho', () => {
        cy.visit("https://advantageonlineshopping.com/#/")
        cy.get('#mobileSearch > .roboto-medium').type("mouse")
        cy.get('#mobileSearch > #menuSearch').click()
        //cy.get('#accordionCategories').should("have.text", "CATEGORIES")
        cy.get(':nth-child(3) > :nth-child(4) > .productName').click()
        cy.get('.fixedBtn > .roboto-medium').click()
        cy.get('#shoppingCartLink > .cart').click()
        cy.get('.sticky > .ng-binding').should("have.text", "(1)")//Validação se o produto se encontra no carrinho

    });
});
