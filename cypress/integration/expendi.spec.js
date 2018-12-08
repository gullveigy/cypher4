describe("Expendi page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    // Click Record Expenditure navbar link
    cy.get(".nav-item").contains('Record Expenditure' ).click();
  });

  it("allows a valid expenditure record to be submitted", () => {
    cy.get('#payment').select('Others');
    cy.get('#type').select('Others');
    cy.get('input.form__input1').type(12);
    cy.get('input.form__input2').type('2018-12-15');
    cy.get('.error').should('not.exist');
    cy.get('button.btn1').click();
    cy.contains('Thanks for your Record').should('exist');
  });

  it("shows error messages for incomplete form fields", () => {
    cy.get('button.btn1').click();
    cy.contains('Please Fill in the Form Correctly.').should('exist');
    cy.get('input.form__input1').type(12);
    cy.get('.error').contains('amount').should('not.exist');
    cy.get('input.form__input2').type('2018-12-15');
    cy.get('.error').should('not.exist');
    //cy.get('.error').contains('date').should('not.exist');
  })
})
