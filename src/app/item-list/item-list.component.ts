import {Component, OnInit} from '@angular/core';
import lineItems from '../../assets/items.json';
import {Item} from "../item";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[] | undefined;

  constructor(private itemService: ItemService ) {
    itemService.getItems().subscribe(items => this.items = items);
  }

  ngOnInit(): void {
  }
}
