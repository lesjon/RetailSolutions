import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {CartItem} from "../cart-item";
import {Observable} from "rxjs";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-item-cart',
  styleUrls: ['item-cart.component.css'],
  templateUrl: 'item-cart.component.html',
})
export class ItemCartComponent implements OnInit {
  displayedColumns: string[] = ['item.name', 'count', 'total'];
  cart: Observable<CartItem[]>;
  total: number = 0;

  constructor(private cartService: CartService) {
    this.cart = cartService.getObserver();
  }

  ngOnInit() {
    this.cart.subscribe((items: CartItem[]) => {
      this.total = 0;
      items.forEach((item: CartItem) => {
        this.total += item.item.price * item.count;
      });
    });
  }
}
