describe('All buttons', () => {
  it('are working', () => {

    let testString = '';
    let testValue = '';
    const buttons = 'ABCDEF1234567890'
    
    cy.visit('')
    cy.get('.key').click({ multiple: true });
    cy.document().then((doc) => {
      testValue = doc.getElementById('inputbox').value;
      cy.get('.inputbox').should('have.value', testValue);    
    });
    cy.get('.clear').click();

    for (let i = 0; i < 4; i++) {
      cy.get('.keyLetter').click();
      cy.document().then((doc) => {
      testString += doc.getElementById('inputbox').value.charAt(i);
      cy.get('.inputbox').should('have.value', testString);
      });
    }

    for (let j = 0; j < 4; j++) {
      cy.document().then((doc) => {
        testString = doc.getElementById('inputbox').value;
        cy.get('.backspace').click();  
        testString = testString.substring(0, testString.length - 1);
        cy.get('.inputbox').should('have.value', testString);
      })
    }
  })
})

/* cy.document().then((doc) => {
    testString += doc.getElementById('inputbox').value;
    cy.get('.inputbox').should('have.value', testString);
  }) */

  /*    cy.get('.key').should(($div) => {
      // access the native DOM element
      testString += $div.get(0).innerText
      cy.get('.inputbox').should('have.value', testString);
    }) */

    // testString += document.getElementById('asd').textContent;