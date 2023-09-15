import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScannerComponent} from './scanner.component';
import {CustomerService} from "../customer.service";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ItemService} from "../item.service";

class CustomerServiceMock {
  getObserver() {
    return {
      subscribe: () => {
      }
    };
  }
}

class ItemServiceMock {
  getItem() {
    return {
      subscribe: () => {
      }
    };
  }
}

describe('ScannerComponent', () => {
  let component: ScannerComponent;
  let fixture: ComponentFixture<ScannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerComponent],
      providers: [{
        provide: CustomerService, useClass: CustomerServiceMock,
      }, {
        provide: ItemService, useClass: ItemServiceMock
      }],
      imports: [FormsModule, MatInputModule, NoopAnimationsModule]
    });
    fixture = TestBed.createComponent(ScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
