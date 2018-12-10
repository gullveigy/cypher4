describe("Expendi page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    // Click Record Expenditure navbar link
    cy.get(".nav-item").contains('Record Expenditure' ).click();
  });


  it("shows error messages for incomplete form fields", () => {
    cy.get('button.btn1').click();
    cy.contains('Please Fill in the Form Correctly.').should('exist');
    cy.get(".nav-item").contains('Manage Expenditures' ).click();
    //cy.get('tbody').find('tr').should('have.length', 2);
    cy.get(".nav-item").contains('Record Expenditure' ).click();
    cy.get('input.form__input1').type(12);
    cy.get('.error').contains('amount').should('not.exist');
    cy.get('input.form__input2').type('2018-12-15');
    cy.get('.error').should('not.exist');
  })


  it("allows a valid expenditure record to be submitted", () => {
    cy.get('#email').select('1804094746@qq.com');
    cy.get('#payment').select('Others');
    cy.get('#type').select('Others');
    cy.get('input.form__input1').type(12);
    cy.get('input.form__input2').type('2018-12-15');
    cy.get('.error').should('not.exist');
    cy.get('button.btn1').click();
    cy.contains('Thanks for your Record').should('exist');
    cy.get('a.btn2').click();
    //cy.get('tbody').find('tr').should('have.length', 3);
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(2)').should('contain','Others');
  });

})
