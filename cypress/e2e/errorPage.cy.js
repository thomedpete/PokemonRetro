describe('Visiting the Error Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/yayadingdongisaradsong')
  })

  it('user should see an error page when they go to the wrong url', () => {
    cy.get('.error-message').contains('404 This URL seems to be incorect please try again later 404 ')
  })

  it('User should be able to navigate home using the home button', () => {
    cy.get('.MuiTypography-root').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })


}) 