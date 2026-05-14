describe('Flujo completo de compra', () => {
    beforeEach(function() {
        cy.fixture('users.json').then((data) => {
            this.userData = data; 
            cy.visit('https://www.saucedemo.com/');
            cy.get('#user-name').type(this.userData.usuarioValido);
            cy.get('#password').type(this.userData.passwordValido);
            cy.get('#login-button').click();
        });
    });

    it('Compra de inicio a fin', function() {
        cy.get('.title').should('contain', 'Products');
        cy.get('.inventory_item_price').first().should('have.text', '$29.99');
        cy.get('.btn.btn_primary.btn_small.btn_inventory').first().click();
        cy.get('.shopping_cart_badge').should('have.text', '1');    
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();
        cy.get('#first-name').type(this.userData.nombre); 
        cy.get('#last-name').type(this.userData.apellido);
        cy.get('#postal-code').type(this.userData.codigoPostal);
        cy.get('#continue').click();
        cy.get('#finish').click();
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });
});
