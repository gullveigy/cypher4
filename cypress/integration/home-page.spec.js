describe("Home page", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  //it("Shows a header", () => {
    //cy.get(".vue-title").should('contain','Online Accoutning Web App');
  //});

  describe("Navigation bar", () => {
    it("Shows the required links", () => {
      cy.get(".navbar").find('[data-test=donatebtn]' );
      cy.get(".navbar").contains('Home' );
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Manage Expenditures')
        cy.get('.nav-item:nth-child(3)').should('contain', 'Record Expenditure')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Chart')
      })
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Login')
        //cy.get('.nav-item:nth-child(2)').should('contain', 'Contact')
      })
    });

    it("Redirects when links are clicked", () => {
      cy.get('[data-test=donatebtn]').click();
      cy.url().should('include','/expendi' )
      cy.get(".navbar").contains('Manage Expenditures' ).click();
      cy.url().should('include','/expenditures' )
      // etc
    });
  })
});
