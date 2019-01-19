describe('Photo Shop', function() {
  it('Visits the Photo Shop', function() {
    cy.visit('http://localhost:1739')
  })

  it('Finds the title', function() {
    cy.visit('http://localhost:1739')

    cy.contains("Per's Photo-Shop")
  })

  it('clicks the buy link and credits are subtracted and item is added to cart and bought', function() {
    cy.visit('http://localhost:1739')

    // Buy item #1
    cy.get('[data-item="1"] span')
      .click()

    // Open credits
    cy.get('#nav-credits')
      .click()

    // 1 credit should have been deducted
    cy.get('#credits')
      .contains("You have 2 units left")

    // Close credits
    cy.get('#nav-credits')
      .click()

    // Open cart
    cy.get('#nav-cart')
      .click()

    // Read item
    cy.get('.cart-item')
      .contains("Bögs Gård")

    // Send order
    cy.get('#send')
      .click()

    // Open credits
    cy.get('#nav-credits')
      .click()

    // Should be restored
    cy.get('#credits')
      .contains("You have 3 units left")

  })

  it('empties the cart', function() {
    cy.visit('http://localhost:1739')

    // Buy item #1
    cy.get('[data-item="1"] span')
      .click()

    // Open cart
    cy.get('#nav-cart')
      .click()

    // Empty cart
    cy.get('.fa-trash-alt')
      .click()

    // Open cart
    cy.get('#nav-cart')
    .click()

    // Should be restored
    cy.get('.empty')
      .contains("Empty cart!")

    // Close cart
    cy.get('#nav-cart')
    .click()

    // Open credits
    cy.get('#nav-credits')
      .click()

    // Should be restored
    cy.get('#credits')
      .contains("You have 3 units left")

    // Close credits
    cy.get('#nav-credits')
      .click()
  })
})
