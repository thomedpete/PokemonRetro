/* eslint-disable no-undef */
describe('Visiting the Error Page', () => {
  beforeEach(() => {
    cy.visit('/yayadingdongisaradsong')
  })

  it('user should see an error page when they go to the wrong url', () => {
    cy.contains(
      '[data-testid="error-message"]',
      '404 This URL seems to be incorect please try again later 404 '
    )
  })

  it('User should be able to navigate home using the home button', () => {
    cy.get('[data-testid="back-to-wild-area-button"]').click()
    cy.url().should('include', '/')
  })
})
