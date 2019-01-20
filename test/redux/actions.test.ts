// TODO: Test reducers
import { IPic } from "../../src/entities/pic.interface";
import * as actions from "../../src/redux/actions";

describe("actions", () => {
  describe("cart", () => {
    it("should create an action to add a picture to the cart", () => {
      const item: IPic = {
        id: "1",
        title: "foo",
        size: "xs",
        type: "bar",
        material: "baz",
        measure: "42",
        price: 1337,
        link: "link"
      };
      const expectedAction = {
        type: actions.ADD_TO_CART,
        item
      };
      expect(actions.addToCart(item)).toEqual(expectedAction);
    });
    it("should create an action to remove a picture from the cart", () => {
      const id = "1";
      const expectedAction = {
        type: actions.REMOVE_FROM_CART,
        id
      };
      expect(actions.removeFromCart(id)).toEqual(expectedAction);
    });
  });

  describe("pics", () => {
    it("should create an action to add pictures to the pics", () => {
      const pic: IPic = {
        id: "1",
        title: "foo",
        size: "xs",
        type: "bar",
        material: "baz",
        measure: "42",
        price: 1337,
        link: "link"
      };
      const pics = [pic];
      const expectedAction = {
        type: actions.ADD_PICS,
        pics
      };
      expect(actions.addPics(pics)).toEqual(expectedAction);
    });
    it("should create an action to add a picture to the pics", () => {
      const pic: IPic = {
        id: "1",
        title: "foo",
        size: "xs",
        type: "bar",
        material: "baz",
        measure: "42",
        price: 1337,
        link: "link"
      };
      const expectedAction = {
        type: actions.ADD_TO_PICS,
        pic
      };
      expect(actions.addToPics(pic)).toEqual(expectedAction);
    });
    it("should create an action to remove a picture from the pics", () => {
      const id = "1";
      const expectedAction = {
        type: actions.REMOVE_FROM_PICS,
        id
      };
      expect(actions.removeFromPics(id)).toEqual(expectedAction);
    });
    it("should create an action to toggle a picture", () => {
      const id = "1";
      const expectedAction = {
        type: actions.TOGGLE_PIC,
        id
      };
      expect(actions.togglePicVisibility(id)).toEqual(expectedAction);
    });
  });

  describe("money", () => {
    it("should create an action to add money", () => {
      const money = 1;
      const expectedAction = {
        type: actions.ADD_MONEY,
        money
      };
      expect(actions.addMoney(money)).toEqual(expectedAction);
    });
    it("should create an action to subtract money", () => {
      const money = 1;
      const expectedAction = {
        type: actions.SUBTRACT_MONEY,
        money
      };
      expect(actions.subtractMoney(money)).toEqual(expectedAction);
    });
  });

  describe("nav", () => {
    it("should create an action to toggle cart", () => {
      const expectedAction = {
        type: actions.TOGGLE_CART
      };
      expect(actions.toggleCartOpen()).toEqual(expectedAction);
    });
    it("should create an action to toggle credits", () => {
      const expectedAction = {
        type: actions.TOGGLE_CREDITS
      };
      expect(actions.toggleCreditsOpen()).toEqual(expectedAction);
    });
  });

  describe("prompt", () => {
    it("should create an action to toggle prompt", () => {
      const expectedAction = {
        type: actions.TOGGLE_PROMPT
      };
      expect(actions.togglePromptOpen()).toEqual(expectedAction);
    });
    it("should create an action to toggle prompt", () => {
      const expectedAction = {
        type: actions.SET_PROMPT_MESSAGE,
        message: "foo"
      };
      expect(actions.setPromptMessage("foo")).toEqual(expectedAction);
    });
  });
});
