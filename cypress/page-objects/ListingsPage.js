/// <reference types="cypress" />

const BaseURL = 'https://www.tmsandbox.co.nz/'

export function navigateToaListing(listingURL) {
  cy.visit(listingURL)
}

export function verifyListingAskingPrice(str) {
  cy.get("[id='PriceSummaryDetails_TitlePrice']").should('have.text',"Asking price: "+str)
}

export function verifyLocationofListing(city) {

  cy.get("[id='ListingAttributes'").find('tr').then(t => {
    let text = t.prop('innerText')
    const propertyInfo = String(text).split(':')
    if (propertyInfo[0]=='Location') {
        //console.log(propertyInfo[1])
        console.log((propertyInfo[1]))
        expect(propertyInfo[1]).to.contain(city)
    }
  })

  //another subtly neater(w.r.t to above)  way to extract the location content from the table
  cy.get("[id='ListingAttributes'").contains('tr', 'Location').find('td').then(elem => {
    console.log(elem.prop('innerText'))
    })
}

export function verifyNumberofImagesOnListing(count){
  cy.get("[id='OtherPhotosContainer']").find('ul').then(elem => {
      console.log(elem.prop('childElementCount'))
      expect(elem.prop('childElementCount')).to.equal(count)
  })

  // or fiind the list directly by id and assert on it's length
  cy.get("[id='thumbs'] > li").should('have.length',count)
}
