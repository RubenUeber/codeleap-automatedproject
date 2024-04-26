/// <reference types = "cypress" />

it('frontend test', () => {
    cy.visit('https://codeleap-frontend-test.netlify.app/')

//making assertives
    cy.get('h1').should('contain','Welcome to CodeLeap network!')
    cy.wait(1000)
    cy.get('p').should('contain','Please enter your username')


    cy.get('input').type('Tiago Silva')
    cy.get('.btn-fill').click()

    cy.get('.standard-form > :nth-child(2) > p')
        .should('contain','Title')

    cy.get('.standard-form > :nth-child(3) > p')
        .should('contain','Content')

    //Writing a content and post

    cy.get('input').type('Embracing the Technological Frontier')
    cy.get('textarea').type('In the ever-evolving landscape of innovation, technology continues to reshape the way we live, work, and connect with the world around us. From cutting-edge advancements to everyday conveniences, here s a glimpse into the transformative power of technology')
    cy.get('.btn-fill').click()

    cy.get('[aria-label="Delete your post Embracing the Technological Frontier"] > path')
       .click({force:true})

    //cy.get('[aria-label="Edit your post Embracing the Technological Frontier"]')

})