/* eslint-disable no-undef */
describe('onLoad', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept(`**/pokemon`, {
      id: '1',
      name: 'bulbasaur',
      status: 200
    })
  })

  it('Should see the logo of the page', () => {
    cy.get('[data-testid="pokemon-logo"]').should('be.visible')
  })

  it('Should see 6 random pokemon', () => {
    cy.get('[data-testid="pokemons"]')
      .should('have.length', 6)
      .should('be.visible')
  })

  it('Should be able to click the Pokedex option and go to Pokedex page', () => {
    cy.get('[data-testid="menu-button"]')
      .click()
      .get('[data-testid="Pokedex-button"]')
      .click()
  })

  it('Should be able to click the home option and go to Home page', () => {
    cy.visit('/pokedex')
    cy.get('[data-testid="back-to-wild-area-button"]')
      .click()
      .url()
      .should('include', '/')
  })

  it('Should be able to navigate with browser arrows', () => {
    cy.get(`[data-testid="menu-button"]`)
      .click()
      .get('[data-testid="Pokedex-button"]')
      .click()
      .url()
      .should('include', '/pokedex')
      .go('back')
      .url()
      .should('include', '/')
      .go('forward')
  })
})
