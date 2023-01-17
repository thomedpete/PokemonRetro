describe('Visiting the Caught Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('user should see a caught page ', () => {
    cy.visit('http://localhost:3000/caught')
    .url().should('eq', 'http://localhost:3000/caught')
  })

  it('User should be able to navigate home using the home button', () => {
    cy.visit('http://localhost:3000/caught')
      .url().should('eq', 'http://localhost:3000/caught')
    cy.get('.MuiButtonBase-root').click()
      .url().should('eq', 'http://localhost:3000/')
     
  })


}) 