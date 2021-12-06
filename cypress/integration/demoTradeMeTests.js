/// <reference types="cypress" />
import  {
  navigateToHomePage,
  logInButtonPresentWithText,
  clickLogInButton,
  checkLoginPageForLoginButton,
  LoginPageLoginButton,
  getAllUsedCarBrandNames,
  visitUsedCarsPage

} from '../page-objects/demoTradeMeTests';

import {
  verifyListingAskingPrice,
  navigateToaListing,
  verifyLocationofListing,
  verifyNumberofImagesOnListing,
  ListingsPage
} from '../page-objects/ListingsPage'

describe('TradeMe sandbox site tests', () => {
  const listing = new ListingsPage()
  beforeEach(() => {
  
  })

  it('should navigate to TradeMe sandbox homepage and be presented with \
  login button ', () => {
    navigateToHomePage()
    logInButtonPresentWithText("Log in")
  })

  it('should navigate to the login page on \
  clicking the LogIn button', () => {
    clickLogInButton()
    var out = LoginPageLoginButton()
    //console.log(out)
    expect(out).to.be.notnull
  })

  it('should be able to rtrieve all the brand \
  names of the cars on the use cars page',() => {
    visitUsedCarsPage()
    getAllUsedCarBrandNames()
  })

  it('should be able to get price for an item \
  and compare it against an expected price',() => {
    listing.navigateToaListing('https://www.tmsandbox.co.nz/property/new-apartment/auction-2149340786.htm')
    listing.verifyListingAskingPrice("$12,312,312")
  })

  it('should be able to verify the city of the listing',() => {
    listing.navigateToaListing('https://www.tmsandbox.co.nz/property/new-apartment/auction-2149340786.htm')
    listing.verifyLocationofListing("Christchur­ch")
  })

  it ('should be able to verify the number of images on the listing', () => {
    listing.navigateToaListing('https://www.tmsandbox.co.nz/property/new-apartment/auction-2149340786.htm')
    listing.verifyNumberofImagesOnListing(3)
  })

})
