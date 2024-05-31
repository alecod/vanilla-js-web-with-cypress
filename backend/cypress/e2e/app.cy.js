class RegisterForm {
  elements = {
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    imageUrlInput: () => cy.get('#imageUrl'),
    urlFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit'),
  }
  typeTitle(text) {
    if(!text) return
    this.elements.titleInput().type(text)
  }

  typeUrl(text) {
    if(!text) return
    this.elements.imageUrlInput().type(text)
  }
}

const registerForm = new RegisterForm()

describe('image registration', () => {
  describe('Submmitng an image with invalid inputs', () => {
    const input = {
      title: "",
      url: ""
    }
    it('Given I am on the image registration page', () => {
      cy.visit('/')
    })
    it(`When I Enter "${input.title}" in the text filed`, () => {
      registerForm.typeTitle(input.title)
    })
    it(`When I Enter ${input.url} in the URL filed`, () => {
      registerForm.typeUrl(input.url)
    })
    it(`Then I click the submit button`, () => {
      
    })
    it(`Then I should see "Please type a title for the image" message above the title field`, () => {
      
    })
    it(`And I should see "Please type a valid URL" message above the imageUrl field`, () => {
      
    })
  })


})