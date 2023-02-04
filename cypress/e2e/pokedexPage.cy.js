/* eslint-disable no-undef */
describe('Visiting the Pokedex Page', () => {
  beforeEach(() => {
    cy.visit('/pokedex')
  })

  it('user should see a pokedex page ', () => {
    cy.url().should('include', '/pokedex')
  })

  it('user should see a list of pokemon displayed ', () => {
    cy.contains('[data-testid="pokemon-Bulbasaur"]', 'Bulbasaur')
    cy.contains('[data-testid="pokemon-Ivysaur"]', 'Ivysaur')
  })

  it('user should be able to search the dex ', () => {
    cy.get('[data-testid="search-field"]').type('mew').type('{enter}')
  })

  it('User should be able to navigate home using the home button', () => {
    cy.visit('/caught').url().should('include', '/caught')
    cy.get('[data-testid="back-to-wild-area-button"]')
      .click()
      .url()
      .should('include', '/')
  })
})
