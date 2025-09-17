
const loginEmailAdress = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)';
const Password = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)';
const loginButton = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button';
const Name = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=text]:nth-child(4)';
const signupButton = '#header > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a';

describe('Login/logout caso de prueba', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('https://automationexercise.com/login'); // Replace with the actual login URL
    cy.get(loginEmailAdress).type('mlucianarodriguez@gmail.com'); // Replace with the actual email input selector
    cy.get(Password).type('tobias22'); // Replace with the actual password input selector
    cy.get(loginButton).click(); // Replace with the actual login button selector
    cy.get(Name).should('contain', 'Luciana'); // Replace with the actual selector that contains the user's name after login
    cy.get(signupButton).click(); // Replace with the actual logout button selector 
    cy.url().should('eq', 'https://automationexercise.com/'); // Replace with the expected URL after logout
  });
});

describe('Signup/login button', () => {
  it('should display signup/login button', () => {
    cy.visit('https://automationexercise.com/');
    cy.get(Name).should('contain', 'Luciana'); // Replace with the actual selector that contains the user's name after login
    cy.get(loginEmailAdress).type('mluciana@gmail.com'); // Replace with the actual email input selector
    cy.get(signupButton).click(); // Replace with the actual logout button selector 
  });
});



