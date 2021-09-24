describe('Button testing', () => { 

    beforeEach(() => {
        cy.visit('');
    })

    it ('tests numeric keys | Submit button enabled', () => {
        
        let numbersArray = [0,1,2,3,4,5,6,7,8,9];
        let expectedValue = '';
        for (let i = 0; i <= 7; i++) { // Currently limited to 8 digits
            cy.get(`button[id="${i}"]`).click();
            expectedValue += numbersArray[i];
            cy.get('.inputbox').should('be.visible').and('have.value', expectedValue);
        }
        cy.get('.submitButton').click();
        cy.get('.cardNumber')
          .should('be.visible')
          .and('have.text', 'Your Card Number: ' + expectedValue);
    })

    it ('tests letter keys | Submit button disabled', () => {
        let keysArray = ['A','B','C','D','E','F'];
        let expectedValue = '';
        for (let i = 0; i < keysArray.length; i++ ) {
            cy.get(`button[id="${keysArray[i]}"]`).click();
            expectedValue += keysArray[i];
            cy.get('.inputbox').should('be.visible').and('have.value', expectedValue);
        }
        cy.get('.submitButton').should('be.disabled');
        cy.get('.cardNumber')
          .should('be.visible')
          .and('have.text', 'Enter Card Number');
    })


    /* it ('sample test with backspace key', () => {
        let expectedValue = 'c724eb44';
        let asd = '';
        let expectedArray = ["C","7","2","4","E","B","4","4"];
        let buttonsToClick = ["C","7","2","4","backspace","4","E","B","backspace","B","4","4"];
        
        for (let i = 0; i < buttonsToClick.length; i++) {
            if (buttonsToClick[i] === "backspace") {
                cy.get(`button[id="backspace"]`).click();
                asd = asd.substring(0, asd.length - 1);
            } else {
                cy.get(`button[id="${buttonsToClick[i]}"]`).click();
                asd += expectedArray[i];
            }
            
            cy.get('.inputbox').should('have.value', asd);
        }

    })  */


   /*  it ('tests numeric keys | Submit button enabled', () => {
        
        let numbersArray = [0,1,2,3,4,5,6,7,8,9];
        let expectedValue = '';
        for (let i = 0; i <= 7; i++) { // Currently limited to 8 digits
            cy.get(`button[id="${i}"]`).click();
            expectedValue += numbersArray[i];
            cy.get('.inputbox').should('be.visible').and('have.value', expectedValue);
        }
        cy.get('.submitButton').click();
        cy.get('.cardNumber')
          .should('be.visible')
          .and('have.text', 'Your Card Number: ' + expectedValue);
    })
 */
})
