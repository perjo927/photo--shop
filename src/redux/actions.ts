import { IPic } from "../entities/pic.interface";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const ADD_PICS = "ADD_PICS";
export const ADD_TO_PICS = "ADD_TO_PICS";
export const REMOVE_FROM_PICS = "REMOVE_FROM_PICS";
export const TOGGLE_PIC = "TOGGLE_PIC";

export const ADD_MONEY = "ADD_MONEY";
export const SUBTRACT_MONEY = "SUBTRACT_MONEY";

export const TOGGLE_CART = "TOGGLE_CART";
export const TOGGLE_CREDITS = "TOGGLE_CREDITS";

export const TOGGLE_PROMPT = "TOGGLE_PROMPT";
export const SET_PROMPT_MESSAGE = "SET_PROMPT_MESSAGE";

export const addToCart = (item: IPic) => {
  return { type: ADD_TO_CART, item };
};

export const removeFromCart = (id: string) => {
  return { type: REMOVE_FROM_CART, id };
};

export const addPics = (pics: IPic[]) => ({ type: ADD_PICS, pics });

export const addToPics = (pic: IPic) => ({ type: ADD_TO_PICS, pic });

export const removeFromPics = (id: string) => {
  return { type: REMOVE_FROM_PICS, id };
};

export const togglePicVisibility = (id: string) => {
  return { type: TOGGLE_PIC, id };
};

export const addMoney = (money: number) => {
  return { type: ADD_MONEY, money };
};

export const subtractMoney = (money: number) => {
  return { type: SUBTRACT_MONEY, money };
};

export const toggleCartOpen = () => {
  return { type: TOGGLE_CART };
};

export const toggleCreditsOpen = () => {
  return { type: TOGGLE_CREDITS };
};

export const togglePromptOpen = () => {
  return { type: TOGGLE_PROMPT };
};

export const setPromptMessage = (message: string) => {
  return { type: SET_PROMPT_MESSAGE, message };
};
