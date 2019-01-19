import hyperHTML from "hyperhtml";
import NavElement from "../../src/components/nav.element";

const { bind } = hyperHTML;

let clicked: string;
const clickFunction = (e: any): any => (clicked = e.target.id);
const mockFunction = (): any => 0;

const onToggleCartRequest = clickFunction;
const onToggleCreditsRequest = clickFunction;
const onOrderRequest = mockFunction;
const onRemoveFromCartRequest = mockFunction;
const shoppingCart = [{ id: 0, title: "foo" }];
const money = 0;

bind(document.getElementById("test-nav"))`
    ${NavElement({
      onToggleCartRequest,
      onToggleCreditsRequest,
      shoppingCart,
      onOrderRequest,
      onRemoveFromCartRequest,
      money
    })}
`;

const cart: HTMLElement = document.getElementById("nav-cart");
const credits: HTMLElement = document.getElementById("nav-credits");

describe("Test nav", () => {
  describe("Rendered component", () => {
    it("Created a nav cart element", () => {
      console.assert("nav-cart" === cart.id);
    });

    it("Created a nav credits element", () => {
      console.assert("nav-credits" === credits.id);
    });
  });

  describe("Rendered content", () => {
    it("Set the correct text value for the cart", () => {
      const [span] = cart.getElementsByTagName("span");
      console.assert("1" === span.textContent);
    });
    it("Set the correct text value for the credits", () => {
      const [span] = credits.getElementsByTagName("span");
      console.assert("0" === span.textContent);
    });
  });

  describe("Handled click events", () => {
    it("handled the cart click function", () => {
      cart.click();
      console.assert("nav-cart" === clicked);
    });
    it("handled the credits click function", () => {
      credits.click();
      console.assert("nav-credits" === clicked);
    });
  });
});
