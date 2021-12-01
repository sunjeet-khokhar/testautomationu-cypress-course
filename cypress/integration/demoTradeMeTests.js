/// <reference types="cypress" />
import  {
  navigateToHomePage,
  logInButtonPresentWithText,
  clickLogInButton,
  checkLoginPageForLoginButton,
  LoginPageLoginButton,
  getAllUsedCarBrandNames

} from '../page-objects/demoTradeMeTests';

/*describe('todo actions', () => {
  beforeEach(() => {
    navigate()

    addTodo('Clean room')
  })*/

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
    expect(LoginPageLoginButton).to.be.notnull
    getAllUsedCarBrandNames()
  })



//})
