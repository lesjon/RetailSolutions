import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "./customer";
import {from, Observable, Subject} from "rxjs";
import customers from '../assets/customers.json';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private currentCustomer = new Subject<Customer>();

  constructor(private http: HttpClient) {
  }

  update(id: string) {
    const customer: Customer | undefined = customers.find(customer => customer.id === 'DC-' + id);
    if (customer) {
      this.currentCustomer.next(customer);
      return from([customer]);
    }
    return new Observable<Customer>((observer) => {
      observer.error('Customer not found')
    });
  }

  getObserver() {
    return this.currentCustomer.asObservable();
  }
}
