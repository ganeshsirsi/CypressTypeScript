import util from "../../support/utility";
import search  from "../../support/page-objects/google.search.page";

//To execute only tests which is tagged as <smoke>
//Use Command npx cypress run --env SUITE="smoke"
//Refer: https://dzone.com/articles/cypress-test-suite-grouping-and-organizing-tests
describe('Google Navigation <smoke>', () => {
    it('Google Search', () => {
    cy.visit('https://www.google.com')
    search.googleSearch.type("Something");
    search.googleSearchBtn.click({force:true});
    search.searchResults.should('be.visible');
    });
});