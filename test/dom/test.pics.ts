import hyperHTML from "hyperhtml";
import PicsElement from "../../src/components/pics.element";

const { bind } = hyperHTML;

const onBuyRequest: any = () => 0;
const pics = [
  {
    id: 0,
    size: "s",
    title: "foo",
    path: "bar",
    material: "",
    measure: "",
    price: ""
  }
];

bind(document.getElementById("test-pics"))`
  ${PicsElement({ pics, onBuyRequest })}
`;

const picsElement = document.getElementById("pics");

describe("Test pic", () => {
  describe("Rendered component", () => {
    it("Created a pic element", () => {
      console.assert("pics" === picsElement.id);
    });
  });
});
