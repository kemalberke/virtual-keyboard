describe('backspace test 3', () => {

    it('backspace test 3', () => {
        cy.visit('');

        let numbersArray = [0,1,2,3,4,5,6,7,8,9];
        let expectedValue = '';
        
        for (let i = 0; i <= 2; i++) { // 0-7 1-8 2-9

            for (let j = i; j <= i+7; j++) { 
                cy.get(`button[id="${j}"]`).click();
                expectedValue += numbersArray[j];
                cy.get('.inputbox').should('be.visible').and('have.value', expectedValue);
            }

            cy.get('.submitButton').click();
            cy.get('.cardNumber')
                .should('be.visible')
                .and('have.text', 'Your Card Number: ' + expectedValue)

            for (let k = 0; k <= 7; k++) {
                cy.get(`button[id="backspace"]`).click();
                expectedValue = expectedValue.substring(0, expectedValue.length - 1);
                cy.get('.inputbox').should('be.visible').and('have.value', expectedValue);
            }

            cy.get('.submitButton')
                .should('be.visible')
                .and('be.disabled');
            
        
        }

    })

})