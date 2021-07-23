// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-mochawesome-reporter/register';
require('cypress-xpath')

//Continue Tests if Application throws exception
//Refer : https://docs.cypress.io/api/events/catalog-of-events#Uncaught-Exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

//Creating Test Suties in Cypress
//Dynamically Pass Environment Variable SUITE
//Refer : https://dzone.com/articles/cypress-test-suite-grouping-and-organizing-tests
beforeEach(function() {
    let testSuite = Cypress.env('SUITE');
    if (!testSuite) {
      return;
    }
    
    const testName = Cypress.mocha.getRunner().test.fullTitle();
    testSuite = "<"+testSuite+">"
    if (!testName.includes(testSuite)) {
      this.skip();
    }
  })

// Uncomment Below code to Preserve Cookies in Tests
// This code preserves all the cookies
//Refer : https://ganeshsirsi.medium.com/cypress-how-to-preserve-cookies-and-keep-login-session-active-in-each-test-simplest-way-717bbc11adf7

//   afterEach(() => {
//     //Code to Handle the Sesssion cookie in cypress.
//     //Keep the Session alive when you jump to another test
//     let str= [];
//     cy.getCookies().then((cook) => {
//         cy.log(cook);
//         for (let l = 0; l < cook.length; l++)
//         {
//             if(cook.length>0&&l==0){
//                 str[l] = cook[l].name;
//                 Cypress.Cookies.preserveOnce(str[l]);
//             }
//             else if(cook.length>1&&l>1){
//                 str[l] = cook[l].name;
//                 Cypress.Cookies.preserveOnce(str[l]);
//             }
//         }
//     })
// })