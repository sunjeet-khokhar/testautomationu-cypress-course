/// <reference types="cypress" />
import  {
  navigateToHomePage,
  logInButtonPresentWithText

} from '../page-objects/demoTradeMeTests';

/*describe('todo actions', () => {
  beforeEach(() => {
    navigate()

    addTodo('Clean room')
  })*/

  it('should navigate to BNZ demo homepage and be presented with \
  login button ', () => {
    navigateToHomePage();
    logInButtonPresentWithText("Log in")
  })

//})
