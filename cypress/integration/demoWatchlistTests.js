/// <reference types="cypress" />
import {
  verifyListingAskingPrice,
  navigateToaListing,
  verifyLocationofListing,
  verifyNumberofImagesOnListing,
  ListingsPage
} from '../page-objects/ListingsPage'

describe('TradeMe sandbox watchlist tests', () => {

  const listing = new ListingsPage

  beforeEach(() => {
  
  })

  it('', () => {
    listing.navigateToaListing('https://www.tmsandbox.co.nz/motors/aircraft/other/auction-2149352592.htm')
    listing.askAQuestion()
  })

})
