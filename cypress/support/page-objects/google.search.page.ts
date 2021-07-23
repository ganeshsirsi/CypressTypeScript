/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

class GoogleSearch {
    get googleSearch() { return cy.get('input[name="q"]').first(); }
    get googleSearchBtn() { return cy.get('input[name="btnK"]').first(); }
    get searchResults() { return cy.get('h3').first(); }
    get searchFithResult() { return cy.xpath("//a[contains(@href,'https://en.wikipedia.org/wiki')]").first(); }
}

export default new GoogleSearch;