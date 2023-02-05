/* eslint-disable no-undef */
describe('Visiting the PC Page', () => {
  beforeEach(() => {
    cy.visit('/pc')
  })

  it('user should see a PC page ', () => {
    cy.contains('[data-testid="pc-logo"]', 'Your PC')
  })

  it('user should see a PC page message ', () => {
    cy.contains(
      '[data-testid="pc-sub-heading-text"]',
      'The Pokemon you caught live here!'
    )
  })

  it('user should see a list of pokemon displayed ', () => {
    cy.visit('/')
    cy.wait(3000).get('[data-testid="pokemon-1"]').click()
    cy.get('[data-testid="pokemon-info"]').should('be.visible')
  })

  it('User should be able to navigate home using the home button', () => {
    cy.visit('/pc').url().should('include', '/pc')
    cy.get('[data-testid="home-link-button-from-pc"]')
      .click()
      .url()
      .should('include', '/')
  })
})
