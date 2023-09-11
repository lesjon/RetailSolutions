import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ItemListComponent} from './item-list/item-list.component';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {NgOptimizedImage} from "@angular/common";
import {ItemCartComponent} from './item-cart/item-cart.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ScannerComponent} from './scanner/scanner.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemCartComponent,
    ScannerComponent,
    CustomerDetailsComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CdkAccordionModule,
        NgOptimizedImage,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        MatCardModule,
        HttpClientModule,
        MatTabsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatDividerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
