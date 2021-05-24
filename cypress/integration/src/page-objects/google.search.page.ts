/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
 
export class GoogleSearch{
   googleSearch(){
   return cy.get('input[name="q"]').first();
   }

   googleSearchBtn(){
    return cy.get('input[name="btnK"]').first();
    }

    searchResults(){
        return cy.get('h3').first();
    }
    searchFithResult(){
        return cy.xpath("(//h3[contains(text(),'Something')])[5]");
    }
 }