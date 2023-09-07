import {Component} from '@angular/core';
import {CartService} from "../cart.service";
import {CartItem} from "../cart-item";
import {Observable} from "rxjs";

@Component({
  selector: 'app-item-cart',
  styleUrls: ['item-cart.component.css'],
  templateUrl: 'item-cart.component.html',
})
export class ItemCartComponent {
  displayedColumns: string[] = ['item.name', 'count', 'total'];
  cart: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.cart = cartService.getObserver();
  }
}
