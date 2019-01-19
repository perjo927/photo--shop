import { IPic } from "./pic.interface";

export interface IShopState {
  cart: IPic[];
  money: number;
  pics: IPic[];
}
