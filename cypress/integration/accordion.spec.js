/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('sould be accordion in #App',()=>{
        cy.get('#App').children().should('have.length',1)
        cy.get('dl').should('have.class','accordion')
        cy.get('dl').children().should('have.length',8)
        cy.get('dt').should('have.class','accordion-header')
        cy.get('dd').should('have.class','accordion-content')
        cy.get('p').parent().should('have.class','accordion-content')
    })

    it('should be visible article content when click on title',()=>{
        cy.get('dt').contains('Section 1').click()
        cy.contains('Section 1').should('have.class','accordion-header is-active')
        cy.contains('Section 1 Content...')
            .parent('dd')
            .should('have.class','accordion-content is-active')
        cy.contains('Section 1 Content...')
            .parent('dd')
            .should('be.visible')
    })

    it('should be hidden first article content when click on second title',()=>{
        cy.get('dt').contains('Section 1').click()
        cy.get('dt').contains('Section 2').click()
        cy.contains('Section 1').should('have.class','accordion-header')
        cy.contains('Section 1 Content...')
            .parent('dd')
            .should('have.class','accordion-content')
        cy.contains('Section 1 Content...')
            .parent('dd')
            .should('be.not.visible')
        cy.contains('Section 2').should('have.class','accordion-header is-active')
        cy.contains('Section 2 Content...')
            .parent('dd')
            .should('have.class','accordion-content is-active')
        cy.contains('Section 2 Content...')
            .parent('dd')
            .should('be.visible')
        cy.get('dt').filter('.is-active').should('have.length',1)
        cy.get('dd').filter('.is-active').should('have.length',1)
    })

    it('should be hidden article content when click on content',()=>{
        cy.get('dt').contains('Section 1').click()
        cy.get('dd').contains('Section 1 Content...').click()
        cy.contains('Section 1').should('have.class','accordion-header')
        cy.contains('Section 1 Content...')
            .parent('dd')
            .should('have.class','accordion-content')
        cy.contains('Section 1 Content...')
            .parent('dd')
            .should('be.not.visible')
        cy.get('dt').filter('.is-active').should('have.length',0)
        cy.get('dd').filter('.is-active').should('have.length',0)
    })
    
    it('should be hidden article content when click twice on title',()=>{
        cy.get('dt').contains('Section 1').click()
        cy.get('dt').contains('Section 1').click()
        cy.contains('Section 1').should('have.class','accordion-header')
        cy.contains('Section 1 Content...')
            .parent('dd')
            .should('have.class','accordion-content')
        cy.contains('Section 1 Content...')
            .parent('dd')
            .should('be.not.visible')
        cy.get('dt').filter('.is-active').should('have.length',0)
        cy.get('dd').filter('.is-active').should('have.length',0)
    })
})