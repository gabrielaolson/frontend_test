describe("Test VR", () => {
    it("I go to the VR site", () => {
        cy.visit("https://www.vr.com.br");
    });
    it("I click on the navigation item - Pra Você", () => {
        cy.get(".vr-quick-navigation").contains("Pra Você").click();
    });
    it("I click in button - Onde usar meu VR Refeição? ", () => {
        cy.wait(1000);
        cy.scrollTo("center");
        cy.get(".vr-button").contains("Onde usar meu VR Refeição?").click();
    });
    it("I validate if Google maps open", () => {
        cy.get(".vr-section-map").should("be.visible");
    });
});