export const mapProps = (store: any, api: any): any => {
  const shoppingCart = store.getFromState("cart");
  const money = store.getFromState("money");
  const nav = store.getFromState("nav");
  const { isCartOpen, isCreditsOpen } = nav;
  const {
    onToggleCartRequest,
    onToggleCreditsRequest,
    onOrderRequest,
    onRemoveFromCartRequest
  } = api;

  return {
    onToggleCartRequest,
    onToggleCreditsRequest,
    isCartOpen,
    isCreditsOpen,
    shoppingCart,
    onOrderRequest,
    onRemoveFromCartRequest,
    money
  };
};
