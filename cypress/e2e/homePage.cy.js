describe('onLoad', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept(`https://pokeapi.co/api/v2/pokemon`,
      {
        'id': '1',
        'name': 'bulbasaur',
        'status': 200
      }
    )
  });

  it('Should see the logo of the page', () => {
    cy.get('.logo')
  });

  it('Should see  random pokemon', () => {
    cy.get('.card-1').should('be.visible')
  });


  it('Should be able to click the Pokedex option and go to Pokedex page', () => {
    cy.get(`#long-button`).click().get('#Pokedex > .little-link').click();
  });

  it('Should be able to click the home option and go to Home page', () => {
    cy.visit('http://localhost:3000/pokedex');
    cy.get('.MuiButtonBase-root').click()
      .url().should('eq', 'http://localhost:3000/')
  });

  it('Should be able to navigate with browser arrows', () => {
    cy.get(`#long-button`).click().get('#Pokedex > .little-link').click()
      .url().should('eq', 'http://localhost:3000/pokedex').go('back')
      .url().should('eq', 'http://localhost:3000/').go('forward')
  });

})