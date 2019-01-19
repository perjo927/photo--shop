import { createStore } from "redux";
import { IShopState } from "../entities/shop.interface";
import { shopApp } from "../redux/reducers";

declare const window: any;

const shopState: IShopState = {
  cart: [],
  money: 3,
  pics: []
};

export class Store {
  // tslint:disable-next-line:variable-name
  private _store: any;

  constructor() {
    this._store = createStore(
      shopApp,
      shopState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    console.debug(this._store.getState());
  }

  get unsubscribe() {
    return this._store.subscribe(() => console.debug(store.state));
  }

  get state() {
    return this._store.getState();
  }

  public getFromState(property: string): any {
    const state = this._store.getState();
    return state[property];
  }

  public dispatch(action: any) {
    this._store.dispatch(action);
  }
}

export const store = new Store();
