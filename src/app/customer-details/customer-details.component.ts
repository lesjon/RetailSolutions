import {Component} from '@angular/core';
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-customer-details',
    templateUrl: './customer-details.component.html',
    styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
    customer: Customer = new Customer('', '', '', '', '', '', '', '', 0);
    errorMessage: string | undefined;
    submitting: boolean = false;

    constructor(private customerService: CustomerService) {
    }

    submit() {
        this.submitting = true;
        this.customerService.createCustomer(this.customer)
            .subscribe({
                next: customer => {
                    this.errorMessage = undefined;
                    this.submitting = false;
                },
                error: error => {
                    if (typeof error === 'string') {
                        this.errorMessage = error;
                    } else if (error.message) {
                        this.errorMessage = error.message;
                    }
                    this.submitting = false;
                },
            });
        this.customer = new Customer('', '', '', '', '', '', '', '', 0);
    }
}
