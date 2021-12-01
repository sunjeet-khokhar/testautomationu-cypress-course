/// <reference types="cypress" />

const BaseURL = 'https://www.tmsandbox.co.nz/'
const LogInButton = "[id='LoginLink']"
const LogInButtonOnLoginPage = "[id='LoginPageButton']"
const UsedCarsPage = 'https://www.tmsandbox.co.nz/motors/used-cars'
const usedCarPageTableId = 'makes'

export function navigateToHomePage() {
  cy.visit(BaseURL)
}

export function logInButtonPresentWithText(loginText){
  cy.get(LogInButton).should('have.text',loginText)
  
}

export function getAllUsedCarBrandNames(){
  cy.visit(UsedCarsPage)
  //const text = cy.get("[id='makes'").find('tr').find('td').invoke('prop','innerText')
  cy.get("[id='"+usedCarPageTableId+"'").find('tr').find('td').each(t => {
    console.log(t.prop('innerText'))
    //console.log(t.attr('class'))
    console.log(t.find('.count').prop('innerText'))
  })
}

export function clickLogInButton(){
  cy.get(LogInButton).click()
}

export function LoginPageLoginButton(){
  return(cy.get(LogInButtonOnLoginPage))
}


export function addTodo(todoText) {
  cy.get('.new-todo').type(todoText + '{enter}')
}

export function toggleTodo(todoIndex) {
  cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
}

export function showOnlyCompletedTodos() {
  cy.contains('Completed').click()
}

export function showOnlyActiveTodos() {
  cy.contains('Active').click()
}

export function showAllTodos() {
  cy.contains('All').click()
}

export function clearCompleted() {
  cy.contains('Clear completed').click()
}

export function validateNumberOfTodosShown(expectedNumberOfTodos) {
  cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
}

export function validateTodoCompletedState(todoIndex, shouldBeCompleted) {
  const l = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)

  l.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
}

export function validateTodoText(todoIndex, expectedText) {
  cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
}

export function validateToggleState(todoIndex, shouldBeToggled) {
  const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)

  label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
}
