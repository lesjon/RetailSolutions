import {AfterContentChecked, Component, ElementRef, ViewChild} from '@angular/core';
import {Item} from "../item";
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ItemService} from "../item.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterContentChecked {
  @ViewChild('scannerInput') scannerInput: ElementRef<HTMLInputElement> | undefined;
  value = '';
  scannedItem: Item | Customer | undefined;
  errorMessage = '';

  constructor(private customerService: CustomerService,
              private itemService: ItemService,
              private cartService: CartService) {
    this.customerService.getObserver().subscribe({
      next: customer => {
        this.scannedItem = customer;
      },
      error: (err) => {
        this.errorMessage = (err as HttpErrorResponse).message;
      },
    });
  }

  /*
   always put the focus on the scanner input field (after any change detection)
   */
  ngAfterContentChecked() {
    this.scannerInput?.nativeElement.focus();
  }

  getScanned() {
    this.value = this.value.toUpperCase();
    if (this.value.startsWith('DC-')) {
      if (isNaN(parseInt(this.value.substring(3), 10))) {
        this.errorMessage = 'Invalid customer id';
        return;
      }
      this.customerService.update(this.value).subscribe({
        error: (err) => {
          if (typeof err === 'string') {
            this.errorMessage = err;
          } else {
            this.errorMessage = (err as HttpErrorResponse).message;
          }
        }
      });
    } else {
      this.itemService.getItem(this.value).subscribe({
        next: item => {
          if (item) {
            this.cartService.add(item);
          } else {
            this.errorMessage = 'Item not found';
          }
        },
        error: (err) => {
          this.errorMessage = (err as HttpErrorResponse).message;
        }
      });
    }
    this.value = '';
  }
}
