/* eslint-disable no-undef */
describe('Visiting the PC Page', () => {
  beforeEach(() => {
    cy.visit('/pc')
  })

  it('user should see a PC page ', () => {
    cy.get('.pcPageHeader').contains('Your PC')
  })

  it('user should see a PC page message ', () => {
    cy.get('.subHeader').contains('The Pokemon you caught live here!')
  })

  it('user should see a list of pokemon displayed ', () => {
    cy.visit('/')
    cy.wait(3000).get('.card-1').click()
    cy.get('.monInfo').should('be.visible')
  })

  it('User should be able to navigate home using the home button', () => {
    cy.visit('/pc').url().should('include', '/pc')
    cy.get('.MuiButtonBase-root').click().url().should('include', '/')
  })
})
