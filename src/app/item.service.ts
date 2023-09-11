import {Injectable} from '@angular/core';
import items from '../assets/items.json';
import {from} from "rxjs";
import {Item} from "./item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items = items as Item[];

  constructor() {
  }

  getItems() {
    return from<Item[][]>([this.items]);
  }

  getItem(id: number) {
    return from([this.items.find(item => item.id === id)]);
  }
}
