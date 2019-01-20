import { combineReducers } from "redux";
import { IPic } from "../entities/pic.interface";
import * as actions from "./actions";

export const cart = (state: IPic[] = [], action: any): IPic[] => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return [...state, action.item];
    case actions.REMOVE_FROM_CART:
      return state.filter((item: any) => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
};

export const money = (state: number = 3, action: any): number => {
  switch (action.type) {
    case actions.ADD_MONEY:
      return state + action.money;
    case actions.SUBTRACT_MONEY:
      return state - action.money;
    default:
      return state;
  }
};

export const pics = (state: IPic[] = [], action: any): IPic[] => {
  switch (action.type) {
    case actions.ADD_PICS:
      return [...state, ...action.pics];
    case actions.ADD_TO_PICS:
      return [...state, action.pic];
    case actions.REMOVE_FROM_PICS:
      return state.filter((item: any) => {
        return item.id !== action.id;
      });
    case actions.TOGGLE_PIC:
      return state.map((pic: IPic) => {
        return pic.id === action.id ? { ...pic, visible: !pic.visible } : pic;
      });
    default:
      return state;
  }
};

export const nav = (
  state: any = { isCartOpen: false, isCreditsOpen: false },
  action: any
): any => {
  switch (action.type) {
    case actions.TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen };
    case actions.TOGGLE_CREDITS:
      return { ...state, isCreditsOpen: !state.isCreditsOpen };
    default:
      return state;
  }
};

export const modal = (
  state: any = { isModalOpen: false, message: "" },
  action: any
): any => {
  switch (action.type) {
    case actions.TOGGLE_MODAL:
      return { ...state, isModalOpen: !state.isModalOpen };
    case actions.SET_MODAL_MESSAGE:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export const shopApp = combineReducers({
  cart,
  money,
  pics,
  nav,
  modal
});
