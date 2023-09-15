import {Component, OnInit} from '@angular/core';
import {Item} from "../item";
import {ItemService} from "../item.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[] | undefined;

  constructor(private itemService: ItemService, private cartService: CartService) {
    itemService.getItems().subscribe(items => this.items = items);
  }

  ngOnInit(): void {
  }

  addItem(item: Item) {
    this.cartService.add(item);
  }
}
