import { GoogleSearch } from "../page-objects/google.search.page";
import { Utility } from "../../../support/utility" //Importing Utility class
const util = new Utility(); //Creating Utility constant for new Utility object
const search = new GoogleSearch();
describe('Environment Configuration Demo', () => {
    it('Using Base URL Cypress.cofig();', () => {
        let url = Cypress.config().baseUrl;
        cy.visit(url);
    });

    it('Using Base URL with Utility Class', () => {
        let url = util.getBaseUrl();
        cy.visit(url);
    });
});