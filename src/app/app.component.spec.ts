import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ItemListComponent } from "./item-list/item-list.component";
import { CdkAccordionModule} from "@angular/cdk/accordion";
import {ItemCartComponent} from "./item-cart/item-cart.component";
import {ScannerComponent} from "./scanner/scanner.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, ItemListComponent, ItemCartComponent, ScannerComponent],
    imports: [CdkAccordionModule, HttpClientTestingModule, FormsModule, MatInputModule, MatToolbarModule, MatTabsModule],
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
