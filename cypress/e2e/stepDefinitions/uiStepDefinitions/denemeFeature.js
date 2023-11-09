import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`scenario bir given`, () => {
   cy.visit("/")
});


Given(`user goes to home page`, () => {
	cy.visit("/")
});

When(`user click on login button`, () => {
	cy.get('.Navbar_linkContainer__2jWIM > [href="/auth/login"]').click()
});

Then(`user should be on login page`, () => {
	
   cy.url().should('contain','login')
});


When(`user enters email {string}`, (userEmail) => {
	cy.get(':nth-child(1) > .col-sm-12 > .form-control').type(userEmail,{force:true})
});

When(`user enters password {string}`, (userPassword) => {
   cy.get(':nth-child(2) > .col-sm-12 > .form-control').type(userPassword,{force:true})
});


When(`user login`, () => {
	cy.get('.btn').click({force:true})
});

Then(`user should be in weekly order page`, () => {
   cy.url().should('contain','weekly-order')

});
Given(`user send int {int}`, (intOrnegi) => {
   expect(intOrnegi).equal(24);
 });
 
 When(`user send double {double}`, (doubleOrnegi) => {
   expect(doubleOrnegi).equal(3.4);
 });
 
 Then(`user send boolean {string}`, (booleanOrnegi) => {
   expect(Boolean(booleanOrnegi)).true;
 });
 
 
When(`user send zipcode`, () => {
	cy.get("[name='zipcode']").type('95109{enter}')
});

Then(`user should be able to see`, (dataTable) => {
	cy.log(dataTable.raw()) //heading include
   cy.log("*************************")
	cy.log(dataTable.rows()) //heading exclude
   cy.log("*************************")

   dataTable.hashes().forEach(val=>{
      cy.contains(val.navbar).should('be.visible')
      cy.log(val.navbar)
      cy.log("***********************")
      cy.log(val.index)
   })




});
