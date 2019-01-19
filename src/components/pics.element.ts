import hyperHTML from "hyperhtml";
import { IPic } from "../entities/pic.interface";
import PicElement from "./pic.element";

const { wire } = hyperHTML;

const PicsElement = (props: any) => {
  const { pics, onBuyRequest } = props;
  return wire()`
        <section id="pics" class="photo-grid">
            ${pics.map((pic: IPic) => PicElement({ pic, onBuyRequest }))}
        </section>
    `;
};

export default PicsElement;
