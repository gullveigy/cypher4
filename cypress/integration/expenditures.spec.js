describe("Manage Expenditures page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    cy.get(".nav-item").contains('Manage Expenditures' ).click();
  });

  it("allows a expenditure record to be edited", () => {
    cy.get('tbody').find('tr').should('have.length', 3);
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(6)').find('a').click();
    //cy.get('#payment').clear();
    cy.get('#payment').select('Alipay');
    cy.get('#type').select('Others');
    cy.get('input.form__input1').clear();
    cy.get('input.form__input1').type('15');
    cy.get('input.form__input2').type('2018-12-15');
    cy.get('.error').should('not.exist');
    cy.get('button.btn1').click();
    cy.contains('Thanks for your Record').should('exist');
    //cy.get('a.btn2').click();
    //cy.get('tbody').find('tr').should('have.length', 5);
    //cy.get('tbody').find('tr:nth-child(5)').find('td:nth-child(2)').should('contain','Alipay');
    //cy.get('tbody').find('tr:nth-child(5)').find('td:nth-child(5)').should('contain','15');
  });

  it("should contains a expenditure record edited", () => {
    cy.get('tbody').find('tr').should('have.length', 3);
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(2)').should('contain','Alipay');
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(5)').should('contain','15');
  });

 it("allows a expenditure record to be deleted", () => {
    cy.get('tbody').find('tr').should('have.length', 3);
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(7)').find('a').click();
    cy.get('button.swal2-confirm').click();
    //cy.get('button.swal2-cancel').click();
    //cy.get(".nav-item").contains('Manage Expenditures' ).click();
    //cy.get('tbody').find('tr').should('have.length', 4);
  });

  it("should only contain original 2 records", () => {
    cy.get('tbody').find('tr').should('have.length', 2);
    cy.get('tbody').find('tr:nth-child(1)').find('td:nth-child(5)').should('contain','4');
    cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(5)').should('contain','1.95');
    //cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(5)').should('contain','4');
    //cy.get('tbody').find('tr:nth-child(4)').find('td:nth-child(5)').should('contain','1.95');
  });

  describe("Manage Expenditures page filter Functions", () => {
    it("allows the records can be filtered by payment", () => {
      cy.get('tbody').find('tr').should('have.length', 2);
      cy.get('table').find('th:nth-child(2)').find('input').type('li');
      cy.get('tbody').find('tr').should('have.length', 1);
      cy.get('tbody').find('tr:nth-child(1)').find('td:nth-child(5)').should('contain','1.95');
    });

    it("allows the records can be filtered date", () => {
      cy.get('tbody').find('tr').should('have.length', 2);
      cy.get('table').find('th:nth-child(3)').find('input').type('2018-11');
      cy.get('tbody').find('tr').should('have.length', 2);
      cy.get('tbody').find('tr:nth-child(1)').find('td:nth-child(5)').should('contain','4');
      cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(5)').should('contain','1.95');
    });

    it("allows the records can be filtered type", () => {
      cy.get('tbody').find('tr').should('have.length', 2);
      cy.get('table').find('th:nth-child(4)').find('input').type('raf');
      cy.get('tbody').find('tr').should('have.length', 1);
      cy.get('tbody').find('tr:nth-child(1)').find('td:nth-child(5)').should('contain','4');
    })

  });

});
