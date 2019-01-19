import { IPic } from "../entities/pic.interface";
import { picService } from "../services/pic.service";

import * as actions from "../redux/actions";
import { store } from "../redux/index";

import { emitter } from "../emitter/emitter";

import { Events } from "./events.enum";

/* HELPERS */
export const togglePic = (id: any): void => {
  store.dispatch(actions.togglePicVisibility(id));
};

export const addPics = (): void => {
  store.dispatch(actions.addPics(picService.getPics()));
};

export const addToCart = (item: IPic) => {
  store.dispatch(actions.addToCart(item));
  store.dispatch(actions.subtractMoney(item.price));
  emitter.emit(Events.AddToCart, item.id);
};

export const removeFromCart = (id: string, price: number): void => {
  store.dispatch(actions.removeFromCart(id));
  store.dispatch(actions.addMoney(price));
  emitter.emit(Events.RemoveFromCart, id);
};

/* REQUEST HANDLERS */
export const onToggleCartRequest = () => {
  store.dispatch(actions.toggleCartOpen());
  emitter.emit(Events.ToggleCart, 0);
};

export const onToggleCreditsRequest = () => {
  store.dispatch(actions.toggleCreditsOpen());
  emitter.emit(Events.ToggleCredits, 0);
};

export const onBuyRequest = (element: any) => {
  const id = element.target.dataset.item;
  const pictures = store.getFromState("pics");
  const item = pictures[id - 1];
  const { price } = item;
  const money = store.getFromState("money");

  if (money - price >= 0) {
    addToCart(item);
    togglePic(item.id);
  } else {
    emitter.emit(Events.OutOfFunds, id);
  }
};

export const onRemoveFromCartRequest = (e: any): void => {
  const id = e.target.dataset.item;
  const pictures = store.getFromState("pics");
  const item = pictures[id - 1];
  const cart = store.getFromState("cart");
  const isItemRemoved = cart.filter((pic: IPic) => pic.id === id).length === 0;

  if (!isItemRemoved) {
    removeFromCart(id.toString(), item.price);
    togglePic(item.id);
  }
};

export const onOrderRequest = (): void => {
  const cart = store.getFromState("cart");
  const info = cart
    .map((item: IPic) => `${item.title} ${item.measure}`)
    .join(", ");
  emitter.emit(Events.OrderInfo, info);
};
