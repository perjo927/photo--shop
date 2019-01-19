import hyperHTML from "hyperhtml";

import AppElement from "./components/app.element";
import NavElement from "./components/nav.element";
import PicsElement from "./components/pics.element";

import { store } from "./redux/index";

import { emitter } from "./emitter/emitter";

import { Events } from "./api/events.enum";
import * as api from "./api/shop.api";

const { bind } = hyperHTML;
let unsubscribe: any;

/* RENDER UTILS */
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

  bind(document.querySelector("nav"))`
    ${NavElement({
      onToggleCartRequest,
      onToggleCreditsRequest,
      isCartOpen,
      isCreditsOpen,
      shoppingCart,
      onOrderRequest,
      onRemoveFromCartRequest,
      money
    })}
  `;
};

const renderPics = (): void => {
  const pics = store.getFromState("pics");
  const { onBuyRequest } = api;
  bind(document.querySelector("main"))`
  ${PicsElement({ pics, onBuyRequest })}
`;
};

/* INIT APP */
const init = (): void => {
  emitter.on(
    Events.ToggleCart,
    (arg: any): void => {
      renderNav();
    }
  );

  emitter.on(
    Events.ToggleCredits,
    (arg: any): void => {
      renderNav();
    }
  );

  emitter.on(
    Events.AddToCart,
    (id: number): void => {
      renderNav();
      renderPics();
    }
  );

  emitter.on(
    Events.RemoveFromCart,
    (id: number): void => {
      renderNav();
      renderPics();
    }
  );

  emitter.on(
    Events.OutOfFunds,
    (): void => {
      alert("Out of money! Empty shopping cart please.");
    }
  );

  emitter.on(
    Events.OrderInfo,
    (info: string): void => {
      alert(`You have purchased ${info}!`);
      unsubscribe();
      window.location.reload(false);
    }
  );

  unsubscribe = store.unsubscribe;
  api.addPics();
  renderApp();
  renderNav();
  renderPics();
};

init();
