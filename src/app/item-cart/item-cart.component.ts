import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {CartItem} from "../cart-item";
import {Observable} from "rxjs";
import {CurrencyPipe} from "@angular/common";
import {CustomerService} from "../customer.service";
import {Item} from "../item";

@Component({
  selector: 'app-item-cart',
  styleUrls: ['item-cart.component.css'],
  templateUrl: 'item-cart.component.html',
})
export class ItemCartComponent implements OnInit, AfterContentChecked {
  displayedColumns: string[] = ['item.name', 'count', 'total'];
  cart: Observable<CartItem[]>;
  total: number = 0;
  totalWithDiscount: number = 0;
  points: number = 0;

  constructor(private cartService: CartService, private customerService: CustomerService) {
    this.cart = cartService.getObserver();
    this.customerService.getObserver().subscribe({
      next: (customer) => {
        this.points = customer.points;
      },
      error: (err) => {
        this.points = 0;
      }
    });
  }

  ngOnInit() {
    this.cart.subscribe((items: CartItem[]) => {
      this.total = 0;
      items.forEach((item: CartItem) => {
        this.total += item.item.price * item.count;
      });
    });
  }

  ngAfterContentChecked(): void {
    this.totalWithDiscount = this.total - this.points;
    while(this.totalWithDiscount < 0) {
      this.totalWithDiscount += 1;
    }
  }

  protected readonly Math = Math;

  clearCart() {
    this.cartService.clear();
  }

  removeFromCart(item: Item) {
    this.cartService.remove(item);
  }

  addToCart(item: Item) {
    this.cartService.add(item);
  }
}
