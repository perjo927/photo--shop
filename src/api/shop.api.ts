import { emitter } from "../emitter/emitter";
import { IPic } from "../entities/pic.interface";
import * as actions from "../redux/actions";
import { store } from "../redux/index";
import { picService } from "../services/pic.service";
import { Events } from "./events.enum";
import { Messages } from "./messages.enum";

/* HELPERS */
export const togglePic = (id: any): void => {
  store.dispatch(actions.togglePicVisibility(id));
};

export const addPics = async (): Promise<void> => {
  const pics = await picService.getPics();
  store.dispatch(actions.addPics(pics));
};

export const addToCart = (item: IPic) => {
  store.dispatch(actions.addToCart(item));
  store.dispatch(actions.subtractMoney(item.price));
};

export const removeFromCart = (id: string, price: number): void => {
  store.dispatch(actions.removeFromCart(id));
  store.dispatch(actions.addMoney(price));
};

export const togglePrompt = (): void => {
  return store.dispatch(actions.togglePromptOpen());
};

export const setPromptMessage = (message: string): void => {
  return store.dispatch(actions.setPromptMessage(message));
};

/* REQUEST HANDLERS */
export const onToggleCartRequest = () => {
  store.dispatch(actions.toggleCartOpen());
};

export const onToggleCreditsRequest = () => {
  store.dispatch(actions.toggleCreditsOpen());
};

export const onBuyRequest = (element: any) => {
  const id = element.target.dataset.item;
  const pictures = store.getFromState("pics");
  const item = pictures[id - 1];
  const { price } = item;
  const money = store.getFromState("money");

  if (money - price >= 0) {
    togglePic(item.id);
    addToCart(item);
  } else {
    setPromptMessage(Messages.OutOfFunds);
    togglePrompt();
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
  setPromptMessage(`${Messages.OrderInfo} ${info}`);
  togglePrompt();
  emitter.emit(Events.OrderInfo, info);
};

export const onClosePromptRequest = (): void => {
  togglePrompt();
};
