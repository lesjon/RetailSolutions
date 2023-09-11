import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerDetailsComponent} from './customer-details.component';
import {CustomerService} from "../customer.service";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

class CustomerServiceMock {
}

describe('CustomerDetailsComponent', () => {
    let component: CustomerDetailsComponent;
    let fixture: ComponentFixture<CustomerDetailsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CustomerDetailsComponent],
            providers: [{provide: CustomerService, useClass: CustomerServiceMock}],
            imports: [FormsModule, MatInputModule, MatIconModule, NoopAnimationsModule]
        });
        fixture = TestBed.createComponent(CustomerDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
