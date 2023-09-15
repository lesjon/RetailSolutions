import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {CartItem} from "../cart-item";
import {Observable} from "rxjs";
import {CustomerService} from "../customer.service";
import {Item} from "../item";

@Component({
  selector: 'app-item-cart',
  styleUrls: ['item-cart.component.css'],
  templateUrl: 'item-cart.component.html',
})
export class ItemCartComponent implements OnInit {
  displayedColumns: string[] = ['item.name', 'count', 'total'];
  cart: Observable<CartItem[]>;
  total: number = 0;
  points: number = 0;

  constructor(private cartService: CartService, private customerService: CustomerService) {
    this.cart = cartService.getObserver();
    this.customerService.getObserver().subscribe({
      next: (customer) => {
        if (!customer) {
          this.points = 0;
        } else {
          this.points = customer.points;
        }
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

  checkout() {
    console.log('checkout');
    this.customerService.updatePoints(Math.floor(this.total / 10)).subscribe();
    this.cartService.clear();
  }
}
