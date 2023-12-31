import {Injectable} from '@angular/core';
import {Item} from "./item";
import {Subject} from "rxjs";
import {CartItem} from "./cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject: Subject<CartItem[]> = new Subject<CartItem[]>();

  private items: CartItem[] = [];

  constructor() {
  }

  add(item: Item, count: number = 1) {

    let cartItem = this.items.find(cartItem => cartItem.itemId === item.id)
    if (cartItem) {
      cartItem.count += count;
    } else {
      this.items.push({count: count, item: item, itemId: item.id});
    }
    this.cartSubject.next(this.items);
  }

  getObserver() {
    return this.cartSubject.asObservable();
  }

  clear() {
    this.items = [];
    this.cartSubject.next(this.items);
  }

  remove(item: Item, count: number = 1) {
    let cartItem = this.items.find(cartItem => cartItem.itemId === item.id)
    if (cartItem) {
      cartItem.count -= count;
      if (cartItem.count <= 0) {
        this.items = this.items.filter(cartItem => cartItem.itemId !== item.id);
      }
      this.cartSubject.next(this.items);
    }
  }
}
