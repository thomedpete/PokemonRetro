/* eslint-disable no-undef */
describe('Visiting the Pokedex Page', () => {
  beforeEach(() => {
    cy.visit('/pokedex')
  })

  it('user should see a pokedex page ', () => {
    cy.url().should('include', '/pokedex')
  })

  it('user should see a list of pokemon displayed ', () => {
    cy.get(':nth-child(1) > .favName').contains('Bulbasaur')
    cy.get(':nth-child(2) > .favName').contains('Ivysaur')
  })

  it('user should be able to search the dex ', () => {
    cy.get('.searchBar').type('mew').type('{enter}')
  })

  it('User should be able to navigate home using the home button', () => {
    cy.visit('/caught').url().should('include', '/caught')
    cy.get('.MuiButtonBase-root').click().url().should('include', '/')
  })
})
