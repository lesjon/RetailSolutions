import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ItemListComponent } from "./item-list/item-list.component";
import { CdkAccordionModule} from "@angular/cdk/accordion";
import {ItemCartComponent} from "./item-cart/item-cart.component";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, ItemListComponent, ItemCartComponent],
    imports: [CdkAccordionModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RetailSolutions'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('RetailSolutions');
  });

});
