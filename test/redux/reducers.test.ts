import { IPic } from "../../src/entities/pic.interface";
import * as actions from "../../src/redux/actions";
import { cart, modal, money, nav, pics } from "../../src/redux/reducers";

describe("cart reducer", () => {
  const pic: IPic = {
    id: "1",
    title: "foo",
    size: "bar",
    type: "baz",
    material: "bam",
    measure: "boo",
    price: 1,
    link: "link"
  };

  const pic2: IPic = {
    id: "2",
    title: "foo",
    size: "bar",
    type: "baz",
    material: "bam",
    measure: "boo",
    price: 2,
    link: "link"
  };

  it("should return the initial state", () => {
    expect(cart(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TO_CART", () => {
    expect(
      cart([], {
        type: actions.ADD_TO_CART,
        item: pic
      })
    ).toEqual([pic]);

    expect(
      cart([pic], {
        type: actions.ADD_TO_CART,
        item: pic2
      })
    ).toEqual([pic, pic2]);
  });

  it("should handle REMOVE_FROM_CART", () => {
    expect(
      cart([pic], {
        type: actions.REMOVE_FROM_CART,
        id: "1"
      })
    ).toEqual([]);
  });
});

describe("money reducer", () => {
  it("should return the initial state", () => {
    expect(money(undefined, {})).toEqual(3);
  });

  it("should handle ADD_MONEY", () => {
    expect(
      money(10, {
        type: actions.ADD_MONEY,
        money: 1
      })
    ).toEqual(11);
  });

  it("should handle SUBTRACT_MONEY", () => {
    expect(
      money(0, {
        type: actions.SUBTRACT_MONEY,
        money: 1
      })
    ).toEqual(-1);
  });
});

describe("nav reducer", () => {
  it("should return the initial state", () => {
    expect(nav(undefined, {})).toEqual({
      isCartOpen: false,
      isCreditsOpen: false
    });
  });

  it("should handle TOGGLE_CART", () => {
    expect(
      nav(
        {
          isCartOpen: false,
          isCreditsOpen: false
        },
        {
          type: actions.TOGGLE_CART
        }
      )
    ).toEqual({
      isCartOpen: true,
      isCreditsOpen: false
    });
  });

  it("should handle TOGGLE_CREDITS", () => {
    expect(
      nav(
        {
          isCartOpen: false,
          isCreditsOpen: false
        },
        {
          type: actions.TOGGLE_CREDITS
        }
      )
    ).toEqual({
      isCartOpen: false,
      isCreditsOpen: true
    });
  });
});

describe("pics reducer", () => {
  const pic: IPic = {
    id: "1",
    title: "foo",
    size: "bar",
    type: "baz",
    material: "bam",
    measure: "boo",
    price: 1,
    link: "link",
    visible: true
  };

  const pic2: IPic = {
    id: "2",
    title: "foo",
    size: "bar",
    type: "baz",
    material: "bam",
    measure: "boo",
    price: 2,
    link: "link",
    visible: true
  };

  it("should return the initial state", () => {
    expect(pics(undefined, {})).toEqual([]);
  });

  it("should handle ADD_PICS", () => {
    expect(
      pics([], {
        type: actions.ADD_PICS,
        pics: [pic]
      })
    ).toEqual([pic]);
  });

  it("should handle ADD_TO_PICS", () => {
    expect(
      pics([], {
        type: actions.ADD_TO_PICS,
        pic
      })
    ).toEqual([pic]);

    expect(
      pics([pic], {
        type: actions.ADD_TO_PICS,
        pic: pic2
      })
    ).toEqual([pic, pic2]);
  });

  it("should handle REMOVE_FROM_PICS", () => {
    expect(
      pics([pic], {
        type: actions.REMOVE_FROM_PICS,
        id: "1"
      })
    ).toEqual([]);
  });
  it("should handle TOGGLE_PIC", () => {
    expect(
      pics([pic, pic2], {
        type: actions.TOGGLE_PIC,
        id: "1"
      })
    ).toEqual([
      {
        ...pic,
        visible: false
      },
      pic2
    ]);
  });
});

describe("modal reducer", () => {
  it("should return the initial state", () => {
    expect(modal(undefined, {})).toEqual({
      isModalOpen: false,
      message: ""
    });
  });

  it("should handle TOGGLE_MODAL", () => {
    expect(
      modal(
        {
          isModalOpen: false,
          message: ""
        },
        {
          type: actions.TOGGLE_MODAL
        }
      )
    ).toEqual({
      isModalOpen: true,
      message: ""
    });
  });

  it("should handle SET_MODAL_MESSAGE", () => {
    expect(
      modal(
        {
          isCartOpen: false,
          message: ""
        },
        {
          type: actions.SET_MODAL_MESSAGE,
          message: "foo"
        }
      )
    ).toEqual({
      isCartOpen: false,
      message: "foo"
    });
  });
});
