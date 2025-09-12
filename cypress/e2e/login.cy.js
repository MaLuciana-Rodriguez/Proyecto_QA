const loginEmailAdress = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)'
const Password = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)'
const loginButton = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button'
const Name = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=text]:nth-child(4)'


describe('Login/logout caso de prueba'), () => {
  it('should log in successfully with valid credentials'), () => {
    cy.visit('https://automationexercise.com/login') // Replace with the actual login URL}
    cy.get(loginEmailAdress).type('lrodriguez@portinos.com') // Replace with the actual email input selector
    cy.get(Password).type('Luportinos') // Replace with the actual password input selector
    cy.get(loginButton).click() // Replace with the actual login button selector
    cy.get(Name).should('contain', 'Luciana') // Replace with the actual selector that contains the user's name after login
    cy.get(loginEmailAdress).type('lrodriguez@portinos.com') // Replace with the actual email input selector

  }
}



