import {Item} from "./item";

export interface CartItem {
  count: number,
  itemId: string,
  item: Item
}
