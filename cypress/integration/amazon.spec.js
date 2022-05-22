/// <reference types="cypress"/>

describe("Amazon test suite", () => {

    it("Buy Birthday Gift Card", () => {

        cy.visit("https://www.amazon.com/")

        // Click the Gift Cards Section
        cy.get("a[href*='/gift-cards']").then(function ($a) {
            const href = $a.prop('href')
            cy.visit(href)
        })

        cy.screenshot()

        // Choose Birthday
        cy.get("a[aria-label='Birthday gift cards']").click()

        // Select first item from the carrousel
        cy.get("div[id='acs-product-block-0']").first().click()

        // Configure card, Standard and 50 USD
        cy.get("button[value='STANDARD']").click()
        cy.get("button[value='50']").click()

        // Enter incorrect email email
        cy.get("textarea[placeholder='Enter an email for each recipient']").type("11234123")
        cy.screenshot()

        // Try Adding to cart
        cy.get("span[id='a-autoid-0']").click()

        // Assert error mesage 
        cy.get("div[class='a-alert-content']").should('be.visible')
        cy.screenshot()

        // Enter correct email email
        cy.get("textarea[placeholder='Enter an email for each recipient']").type("myemail@gmail.com")

        // Add to cart
        cy.get("span[id='a-autoid-0']").click()

        // Check Added to Cart alert
        cy.get("span[class*='a-size-medium-plus']").contains("Added to Cart")

        // Navigate to the Cart
        cy.get("a[id='nav-cart']").click()

        // Check that an egift card is found in the cart
        cy.get("div[data-name='Active Items']").then(function ($a) {
            const textContent = $a.text() 
            expect(textContent).to.contain("Amazon eGift Card")
        })

        cy.screenshot()

    })

})

