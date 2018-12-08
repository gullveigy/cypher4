describe("Home page", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  describe("Navigation bar", () => {
    it("Shows the required links", () => {
      cy.get(".navbar-brand").contains('Accounting Web App');
      cy.get('.navbar-nav').within(() => {
        cy.get('.nav-item').should('contain', 'Home')
        cy.get('.nav-item').should('contain', 'Manage Expenditures')
        cy.get('.nav-item').should('contain', 'Record Expenditure')
        cy.get('.nav-item').should('contain', 'Chart')
      });
      cy.get('.navbar-nav.ml-auto').within(() => {
        cy.get('.nav-item').should('contain', 'Contact Us')
        cy.get('.nav-item').should('contain', 'Login')
        cy.get('.nav-item').should('contain', 'Logout')
      })
    });
    it("Redirects when links are clicked", () => {
      cy.get(".navbar-brand").contains('Accounting Web App').click();
      cy.url().should('include','/#' )
      cy.get(".nav-item").contains('Home' ).click();
      cy.url().should('include','/#' )
      cy.get(".nav-item").contains('Manage Expenditures' ).click();
      cy.url().should('include','/expenditures' )
      cy.get(".nav-item").contains('Record Expenditure' ).click();
      cy.url().should('include','/expendi' )
      cy.get(".nav-item").contains('Contact Us' ).click();
      cy.url().should('include','/contact' )
    })
  });


  describe("Home page layout and required links", () => {
    it("Shows the required links and titles", () => {
      cy.get('.lead').should('contain', 'Online Accounting Web App')
      cy.get('p').should('contain', 'Managing money is equivalent to managing everything.')
      cy.get('.btn1').should('contain', 'Go for Your Recoding!')
      cy.get('.btn2').should('contain', 'Contact Us')
    });
    it("Redirects when btn1 links are clicked", () => {
      cy.get('.btn1').should('contain', 'Go for Your Recoding!').click();
      cy.url().should('include','/expenditures' )
    });
    it("Redirects when btn2 links are clicked", () => {
      cy.get('.btn2').should('contain', 'Contact Us').click();
      cy.url().should('include','/contact' )
    })
  })

});
