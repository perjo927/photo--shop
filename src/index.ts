import hyperHTML from "hyperhtml";

import { Events } from "./api/events.enum";
import * as api from "./api/shop.api";
import AppElement from "./components/app.element";
import ModalElement from "./components/modal.element";
import NavElement from "./components/nav.element";
import PicsElement from "./components/pics.element";
import { emitter } from "./emitter/emitter";
import { store } from "./redux/index";

const { bind } = hyperHTML;
let unsubscribe: any;

/* RENDER FUNCTIONS */
const renderApp = (): void => {
  bind(document.querySelector("body"))`${AppElement()}`;
};

const renderNav = (): void => {
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

  const props = {
    onToggleCartRequest,
    onToggleCreditsRequest,
    isCartOpen,
    isCreditsOpen,
    shoppingCart,
    onOrderRequest,
    onRemoveFromCartRequest,
    money
  };

  bind(document.querySelector("nav"))`
    ${NavElement(props)}
  `;
};

const renderPics = (): void => {
  const pics = store.getFromState("pics");
  const { onBuyRequest } = api;

  bind(document.querySelector("main"))`
  ${PicsElement({ pics, onBuyRequest })}
`;
};

const renderModal = (): void => {
  const { onClosePromptRequest } = api;
  const prompt = store.getFromState("prompt");
  const { isPromptOpen, message } = prompt;
  const props = { message, isPromptOpen, onClosePromptRequest };

  bind(document.querySelector("section#modal"))`${ModalElement(props)}`;
};

/* INIT APP */
const init = async (): Promise<void> => {
  // Custom handling on order request
  emitter.on(
    Events.OrderInfo,
    (info: string): void => {
      unsubscribe();
      // TODO: Reset state  instead
      setTimeout(() => {
        window.location.reload(false);
      }, 1500);
    }
  );

  // First render
  await api.addPics();
  renderApp();
  renderNav();
  renderPics();

  unsubscribe = store.unsubscribe(() => {
    // Re-render on state change
    renderNav();
    renderPics();
    renderModal();
  });
};

/* START */
init();
