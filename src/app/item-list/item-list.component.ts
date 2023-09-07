import {Component, OnInit} from '@angular/core';
import lineItems from '../../assets/items.json';
interface Item {
  name: string,
  price: number,
  image: string
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];

  constructor() {
    this.items = lineItems;
  }

  ngOnInit(): void {
  }
}
