describe('Visiting the Pokedex Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pokedex')
  })

  it('user should see a pokedex page ', () => {
      cy.url().should('eq', 'http://localhost:3000/pokedex')
  })

  it('user should see a list of pokemon displayed ', () => {
    cy.get(':nth-child(1) > .favName').contains('Bulbasaur')
    cy.get(':nth-child(2) > .favName').contains('Ivysaur')
  })

  it('user should be able to search the dex ', () => {
    cy.get('.searchBar').type('mew').type('{enter}')
  })

  it('User should be able to navigate home using the home button', () => {
    cy.visit('http://localhost:3000/caught')
      .url().should('eq', 'http://localhost:3000/caught')
    cy.get('.MuiButtonBase-root').click()
      .url().should('eq', 'http://localhost:3000/')

  })


}) 