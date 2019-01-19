import hyperHTML from "hyperhtml";
import { IPic } from "../entities/pic.interface";
const { wire } = hyperHTML;

const EmptyElement: any = (): string =>
  wire()`<div class="empty">Empty cart!</div>`;

const ItemElement: any = (props: any): string => {
  const { item, onRemoveFromCartRequest } = props;
  return wire(item)`
          <div class="cart-item">
              ${item.title}
              <span id="trash" data-item=${
                item.id
              } onclick=${onRemoveFromCartRequest} class="cart-icon">
                  <i class="fas fa-trash-alt" data-item=${
                    item.id
                  } onclick=${onRemoveFromCartRequest}></i>
              </span>
        </div>
    `;
};

const SendElement: any = (props: any): string => {
  return wire()`
        <a>
            <b id="send" onclick=${props.onOrderRequest}>→ Send!</b>
        </a>
    `;
};

const CartElement: any = (props: any): string => {
  const {
    shoppingCart,
    onRemoveFromCartRequest,
    onOrderRequest,
    isCartOpen
  } = props;
  const isEmptyCart = shoppingCart.length === 0;

  if (!isCartOpen) {
    return null;
  }

  return wire()`
        <div id="cart" class="box">
            ${
              isEmptyCart
                ? EmptyElement()
                : shoppingCart.map((item: IPic) =>
                    ItemElement({ item, onRemoveFromCartRequest })
                  )
            }
            ${!isEmptyCart ? SendElement({ onOrderRequest }) : ""}
        </div>
    `;
};

export default CartElement;
