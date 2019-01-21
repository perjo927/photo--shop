import hyperHTML from "hyperhtml";
import { Events } from "./api/events.enum";
import * as api from "./api/shop.api";
import AppElement from "./components/app.element";
import ModalElement from "./components/modal.element";
import * as modal from "./components/modal.props";
import NavElement from "./components/nav.element";
import * as nav from "./components/nav.props";
import PicsElement from "./components/pics.element";
import * as pics from "./components/pics.props";
import { emitter } from "./emitter/emitter";
import { store } from "./redux/index";

const { bind } = hyperHTML;
let unsubscribe: any;

/* RENDER FUNCTIONS */
const renderApp = (): void => {
  bind(document.querySelector("body"))`${AppElement()}`;
};

const renderNav = (): void => {
  const props = nav.mapProps(store, api);
  bind(document.querySelector("nav"))`
    ${NavElement(props)}
  `;
};

const renderPics = (): void => {
  const props = pics.mapProps(store, api);
  bind(document.querySelector("main"))`
    ${PicsElement(props)}
  `;
};

const renderModal = (): void => {
  const props = modal.mapProps(store, api);
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
