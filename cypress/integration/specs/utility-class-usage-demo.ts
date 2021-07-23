import util from "../../support/utility";
describe('Environment Configuration Demo', () => {

    it('Using Base URL Cypress.cofig();', () => {
        let url = Cypress.config().baseUrl;
        cy.visit(url);
    });

    it('Using Base URL with Utility Class', () => {
        /**
         * To use this option pass environment variable from command line 
         * Example: npx cypress run --spec cypress/integration/specs/utility-class-usage-demo.ts --env ENV="prod"
         */
        let url = util.getBaseUrl();
        cy.visit(url);
    });
});