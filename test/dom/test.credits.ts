import hyperHTML from "hyperhtml";
import CreditsElement from "../../src/components/credits.element";

const { bind } = hyperHTML;

bind(document.getElementById("test-credits"))`
  ${CreditsElement({ money: 42, isCreditsOpen: true })}
`;

const renderedComponent: HTMLElement = document.getElementById("credits");

describe("Test Credits", () => {
  describe("Rendered Component", () => {
    it("created a credits element", () => {
      console.assert("credits" === renderedComponent.id);
    });
  });
  describe("Rendered Content", () => {
    it("set the correct text value", () => {
      console.assert(
        "You have 42 units left." === renderedComponent.textContent.trim()
      );
    });
  });
});
