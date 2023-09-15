import {Injectable} from '@angular/core';
import {from} from "rxjs";
import {Item} from "./item";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  createItem(item: Item) {
    return this.http.post<Item>('http://localhost:8080/api/items/addItem', item);
  }

  getItems() {
    return this.http.get<Item[]>('http://localhost:8080/api/items');
  }

  getItem(id: string) {
    return this.http.get<Item>('http://localhost:8080/api/items/getItemById/' + id);
  }
}
