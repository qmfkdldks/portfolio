import { mount } from "@cypress/react";
import { withTranslation } from "react-i18next";
import Component from "../component";
import withThemeProvider from "../../../hocs/withThemeProvider";
import { today } from "../ranges";

describe("DateRanges", () => {
  const Subject = withTranslation()(withThemeProvider(Component));

  it("contains date information", () => {
    const onDateChange = cy.spy();

    mount(<Subject onDateChange={onDateChange} />);
    cy.get("button").contains("Today");
  });

  it("calls callback when click button", () => {
    const onDateChange = cy.spy();

    mount(<Subject onDateChange={onDateChange} />);

    cy.get("button")
      .contains("Today")
      .click()
      .then(() => {
        expect(onDateChange).to.have.been.calledOnce;
        expect(onDateChange).to.have.been.calledWith(today());
      });
  });

  it("opens date range picker", () => {
    const onDateChange = cy.spy();

    mount(<Subject onDateChange={onDateChange} />);

    cy.get("#calendar-menu").click();

    cy.get(".rdrDayNumber").first().click();
    cy.get(".rdrDayNumber")
      .eq(4)
      .click()
      .then(() => {
        expect(onDateChange).to.have.been.called;
      });
  });
});
