import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCartComponent } from './item-cart.component';
import {MatTableModule} from "@angular/material/table";

describe('ItemCartComponent', () => {
  let component: ItemCartComponent;
  let fixture: ComponentFixture<ItemCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCartComponent],
      imports: [MatTableModule],
    });
    fixture = TestBed.createComponent(ItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
