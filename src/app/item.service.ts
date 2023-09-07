import {Injectable} from '@angular/core';
import * as items from '../assets/items.json';
import {from} from "rxjs";
import {Item} from "./item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items = items;

  constructor() {
  }

  getItems() {
    return from<Item[][]>([items]);
  }
}
