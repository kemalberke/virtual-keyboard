

describe('backspace test 2', () => {

    it('backspace test 2', () => {
        cy.visit('');

        let numbersArray = [0,1,2,3,4,5,6,7,8,9];
        let expectedValue = '';
        let inputValue = '';


        for (let i = 0; i <= 9; i++) {
            console.log('asd',inputValue)
            if (inputValue.length === 8) {
                cy.get(`button[id="backspace"]`).click();
                expectedValue = expectedValue.substring(0, expectedValue.length - 1);
                cy.get('.inputbox').should('be.visible').and('have.value', expectedValue);
                i--;
                console.log('asd');
            } else {
                cy.get(`button[id="${i}"]`).click();
                expectedValue += numbersArray[i];
                cy.get('.inputbox').should('be.visible').and('have.value', expectedValue);
            }
        }

    })

})