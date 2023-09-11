import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "./customer";
import {from, Observable, Subject} from "rxjs";
import customersData from '../assets/customers.json';

const customers = customersData
    .map((customer) =>
        new Customer(customer.id, customer.firstName, customer.lastName,
            customer.street, customer.houseNumber, customer.zipCode, customer.city,
            customer.email, customer.points));

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private currentCustomer = new Subject<Customer>();

    constructor(private http: HttpClient) {}

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

    private validCustomer(customer: Customer) {
        if (customer.id.length === 0 || 0 === customer.firstName.length
            || 0 === customer.lastName.length || 0 === customer.email.length || 0 === customer.city.length
            || 0 === customer.zipCode.length) {
            return false;
        }
        return true;
    }

    createCustomer(customer: Customer) {
        if (!this.validCustomer(customer)) {
            return new Observable<Customer>((observer) => {
                observer.error('Invalid customer')
            });
        }
        customers.push(customer);
        console.info('updated customer list', customers);
        this.currentCustomer.next(customer);
        return from([customer]);
    }
}
