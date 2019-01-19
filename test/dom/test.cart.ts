import hyperHTML from "hyperhtml";
import CartElement from "../../src/components/cart.element";

const { bind } = hyperHTML;

let clicked: string;
const clickFunction = (event: any): any => (clicked = event.target.id);

const onOrderRequest = clickFunction;
const onRemoveFromCartRequest = clickFunction;
const shoppingCart = [{ id: 0, title: "foo" }];
const emptyShoppingCart = [];
const isCartOpen = true;

bind(document.getElementById("test-nav"))`
    ${CartElement({
      shoppingCart,
      onOrderRequest,
      onRemoveFromCartRequest,
      isCartOpen
    })}
`;

const cartElement: HTMLElement = document.getElementById("cart");
const sendElement: HTMLElement = document.getElementById("send");
const trashElement: HTMLElement = document.getElementById("trash");
const [itemElement] = document.getElementsByClassName("cart-item");

describe("Test cart", () => {
  describe("Rendered component", () => {
    it("Created a cart element", () => {
      console.assert("cart" === cartElement.id);
    });
    it("Created an item element", () => {
      console.assert("cart-item" === itemElement.className);
    });
    it("Created a send element", () => {
      console.assert("send" === sendElement.id);
    });
  });

  describe("Rendered content", () => {
    it("Set the correct text value for the item", () => {
      const text = cartElement.textContent
        .trim()
        .split(" ")[0]
        .trim();
      console.assert("foo" === text);
    });
    it("Created a send element", () => {
      console.assert("→ Send!" === sendElement.textContent.trim());
    });
  });

  describe("Handled click events", () => {
    it("handled the trash function", () => {
      trashElement.click();
      console.assert("trash" === clicked);
    });
    it("handled the send function", () => {
      sendElement.click();
      console.assert("send" === clicked);
    });
  });
});

bind(document.getElementById("test-empty-nav"))`
    ${CartElement({
      shoppingCart: emptyShoppingCart,
      onOrderRequest,
      onRemoveFromCartRequest,
      isCartOpen
    })}
`;

describe("Test empty cart", () => {
  const [emptyElement] = document.getElementsByClassName("empty");

  describe("Rendered component", () => {
    it("Created an empty element", () => {
      console.assert("empty" === emptyElement.className);
    });
  });
});
