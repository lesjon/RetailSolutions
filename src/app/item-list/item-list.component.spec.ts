import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {ItemService} from "../item.service";

class ItemServiceMock{
  getItems() {
    return {subscribe: () => []}
  }
}

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListComponent],
      imports: [CdkAccordionModule],
      providers: [
        {provide: ItemService, useClass: ItemServiceMock}
      ]
    });
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
