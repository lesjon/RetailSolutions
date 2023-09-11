import { Component } from '@angular/core';
import {Customer} from "./customer";
import {CustomerService} from "./customer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RetailSolutions';
  customer: Customer | undefined;
  selectedIndex: number | null = 0;
  constructor(private customerService: CustomerService) {
    this.customerService.getObserver().subscribe(customer => {
      this.customer = customer;
    });
  }
}
