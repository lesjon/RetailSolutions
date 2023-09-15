import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "./customer";
import {Observable, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private currentCustomer = new Subject<Customer>();
  private lastCustomer: Customer | undefined;

  constructor(private http: HttpClient) {
    this.currentCustomer.subscribe((customer) => {
      this.lastCustomer = customer;
    });
  }

  update(id: string) {
    return this.http.get<Customer>('http://localhost:8080/api/customers/getCustomerById/' + id)
      .pipe(tap((customer) => {
        this.currentCustomer.next(customer);
      }));
  }

  getObserver() {
    return this.currentCustomer.asObservable();
  }

  private validCustomer(customer: Customer) {
    if (customer.id.length === 0 || 0 === customer.firstName.length
      || 0 === customer.lastName.length || 0 === customer.email.length || 0 === customer.city.length
      || 0 === customer.zipCode.length) {
      return false;
    }
    return true;
  }

  createCustomer(customer: Customer): Observable<Customer> {
    if (!this.validCustomer(customer)) {
      return new Observable<Customer>((observer) => {
        observer.error('Invalid customer')
      });
    }
    return this.http.post<Customer>('http://localhost:8080/api/customers/addCustomer', customer)
      .pipe(tap((customer) => {
        this.currentCustomer.next(customer)
      }));
  }

  updatePoints(total: number) {
    if(!this.lastCustomer) {
      return new Observable<Customer>((observer) => {
        observer.error('No customer selected')
      });
    }
    const updateVerb = total > 0 ? 'addPoints' : 'subtractPoints';
    return this.http.put<Customer>(`http://localhost:8080/api/customers/${this.lastCustomer.id}/${updateVerb}`, {points: total});
  }
}
