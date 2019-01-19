import hyperHTML from "hyperhtml";
import PicElement from "../../src/components/pic.element";

const { bind } = hyperHTML;

let clicked: string;
const clickFunction = (event: any): any => (clicked = event.target.id);

const onBuyRequest = clickFunction;
const pic = {
  id: 0,
  size: "s",
  title: "foo",
  path: "bar",
  material: "",
  measure: "",
  price: "",
  visible: true
};

bind(document.getElementById("test-pic"))`
    ${PicElement({ pic, onBuyRequest })}
`;

const [picElement]: any = document.getElementsByClassName("photo");
const [buyElement]: any = document.getElementsByClassName("buy");

describe("Test pic", () => {
  describe("Rendered component", () => {
    it("Created a pic element", () => {
      console.assert("0" === picElement.id);
    });
  });

  describe("Rendered content", () => {
    it("Set the correct title for the pic", () => {
      const [title] = picElement.getElementsByTagName("h3");
      console.assert("foo" === title.textContent);
    });
    it("Created a picture tag", () => {
      const picture = picElement.getElementsByTagName("picture");
      console.assert(1 === picture.length);
    });
  });

  describe("Handled click events", () => {
    it("handled the buy function", () => {
      buyElement.click();
      console.assert("buy-0" === clicked);
    });
  });
});
