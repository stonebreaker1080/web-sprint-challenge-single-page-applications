// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form



describe('Add text to the box', function () {

    it('Cypress types in text', function() {

        cy.visit('http://localhost:3000/')
        cy.contains("PizzaHut").click()
        cy.get("input[name=comment").should("have.value", "")
            .type("burn it")
            .should("have.value", "burn it")
    })
})

describe('Select multiple toppings', function () {

    it('Select Pepperoni & Sausage', function() {

        cy.visit('http://localhost:3000/')
        cy.contains("PizzaHut").click()
        cy.get('input[type="checkbox"]').check('Pepperoni')
        cy.get('input[type="checkbox"]').check('Sausage')
        
    })
})

describe('Submit', function () {

    it('Select options and submit', function() {

        cy.visit('http://localhost:3000/')
        cy.contains("PizzaHut").click()
        cy.get('button').should('be.disabled')
        cy.get('input[type="checkbox"]').check('Pepperoni')
        cy.get('input[type="checkbox"]').check('Sausage')
        cy.get('input[type="radio"]').check('Garlic Ranch')
        cy.get('select').select('M')
        cy.get('button').should('not.be.disabled')
        cy.get('form').submit()
        
    })
})