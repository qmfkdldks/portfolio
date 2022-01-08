// import { mount } from "@cypress/react";
// import { withTranslation } from "react-i18next";
// import { withRouter } from "react-router";
// import { BrowserRouter as Router } from "react-router-dom";
// import Component from "..";
// import withThemeProvider from "../../../hocs/withThemeProvider";

// describe("Sidebar", () => {
//   const Subject = withRouter(withTranslation()(withThemeProvider(Component)));

//   beforeEach(() => {
//     const props = {
//       onSignOutClick: cy.stub().as("signOut"),
//     };

//     const RouterComponent = (
//       <Router>
//         <Subject {...props} />
//       </Router>
//     );

//     mount(RouterComponent);
//   });

//   it("render dropdown", () => {
//     cy.get("#menuButton")
//       .click()
//       .then(() => {
//         cy.get("#dropdown").should("exist");
//       });
//   });

//   it("sign out button calls function", () => {
//     cy.get("#menuButton")
//       .click()
//       .then(() => {
//         cy.get("div").contains("Sign out").click();

//         cy.get("@signOut").should("be.called");
//       });
//   });

//   it("hide navbar items in menu", () => {
//     cy.viewport("iphone-x");
//     cy.get("#navbar-items").should("not.exist");
//     cy.get("#menuButton")
//       .click()
//       .then(() => {
//         cy.get("#dropdown").contains("products");
//       });
//   });
// });
