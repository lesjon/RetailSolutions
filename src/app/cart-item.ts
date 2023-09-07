import {Item} from "./item";

export interface CartItem {
  count: number,
  itemId: number,
  item: Item
}
