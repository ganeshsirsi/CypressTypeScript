import search from "../../support/page-objects/google.search.page";

describe('Javascript Click Demo', () => {
    it('Javacript Click using Native DOM', () => {
        cy.visit('https://www.google.com')
        search.googleSearch.type("Something");
        search.googleSearchBtn.then(($el) => {
            $el.get(0).click();
        });
        search.searchResults.should('be.visible');
    });

    it('Javacript Click using Window Object', () => {
        cy.visit('https://www.google.com')
        search.googleSearch.type("Something");
        cy.window().then((win) => {
            win.eval("document.querySelector('input[name=\"btnK\"]').click()");
        });
        search.searchResults.should('be.visible');
    });
});
