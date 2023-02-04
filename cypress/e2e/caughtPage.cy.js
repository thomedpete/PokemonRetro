/* eslint-disable no-undef */
describe('Visiting the Caught Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('**/pokemon/151').as('pokemon_api')
  })

  it('user should see a caught page ', () => {
    cy.visit('/caught').url().should('include', '/caught')
  })

  it('User should be able to navigate home using the home button', () => {
    cy.visit('/')
      .wait('@pokemon_api')
      .its('response.statusCode')
      .should('eq', 200)
    cy.get('[data-testid="pokemons-lists"]')
      .find('[data-testid="pokemons"]')
      .should('have.length', 6)
      .should('be.visible')
      .then(mainPage => {
        cy.get(mainPage)
          .find('[data-testid="pokemon-6"]')
          .should('be.visible')
          .then($btn => {
            if ($btn.is(':enabled')) {
              cy.wrap($btn).click() //Button is enabled
            } else {
              //Button is disabled
            }
          })
      })
  })
})
