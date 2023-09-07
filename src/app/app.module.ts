import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemListComponent } from './item-list/item-list.component';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {NgOptimizedImage} from "@angular/common";
import { ItemCartComponent } from './item-cart/item-cart.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    NgOptimizedImage,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
