/// <reference types="cypress" />

const BaseURL = 'https://www.tmsandbox.co.nz/'

export function navigateToaListing(listingURL) {
  cy.visit(listingURL)
}

export function verifyListingAskingPrice(str) {
  cy.get("[id='PriceSummaryDetails_TitlePrice']").should('have.text',"Asking price: "+str)
}

export function verifyLocationofListing(city) {
  cy.get("[id='ListingAttributes'").find('tr').each(t => {
    let text = t.prop('innerText')
    const propertyInfo = String(text).split(':')
    if (propertyInfo[0]=='Location') {
        //console.log(propertyInfo[1])
        console.log((propertyInfo[1]))
        expect(propertyInfo[1]).to.contain(city)
    }
  })
}
