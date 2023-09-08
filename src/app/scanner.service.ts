import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor(private http: HttpClient) { }

  get(value: string) {
    return this.http.get(`http://localhost:3000/items/${value}`);
  }
}
