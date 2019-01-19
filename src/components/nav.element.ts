import hyperHTML from "hyperhtml";
import CartElement from "./cart.element";
import CreditsElement from "./credits.element";

const { wire } = hyperHTML;

const CartContainer: any = (props: any) => {
  const {
    onToggleCartRequest,
    shoppingCart,
    onOrderRequest,
    onRemoveFromCartRequest,
    isCartOpen
  } = props;

  return wire()`
    <div id="nav-cart" onclick=${onToggleCartRequest}>
        <i class="fas fa-shopping-cart fa-xs"></i>
        <span>${shoppingCart.length}</span>
        <div class="nav-item-container">${CartElement({
          shoppingCart,
          onOrderRequest,
          onRemoveFromCartRequest,
          isCartOpen
        })}</div>
    </div>
    `;
};

const CreditsContainer: any = (props: any) => {
  const { onToggleCreditsRequest, money } = props;

  return wire()`
        <div id="nav-credits" onclick=${onToggleCreditsRequest}>
            <i class="fas fa-hand-holding-usd fa-xs"></i>
            <span>${money}</span>
            <div class="nav-item-container">${CreditsElement(props)}</div>
        </div>
    `;
};

const NavElement = (props: any) => {
  return wire()`
        ${CartContainer(props)}
        ${CreditsContainer(props)}
    `;
};

export default NavElement;
