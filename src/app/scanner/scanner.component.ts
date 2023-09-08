import {AfterContentChecked, Component, ElementRef, ViewChild} from '@angular/core';
import {Item} from "../item";
import {Customer} from "../customer";
import {ScannerService} from "../scanner.service";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterContentChecked {
  @ViewChild('scannerInput') scannerInput: ElementRef<HTMLInputElement> | undefined;
  value = '';
  scannedItem: Item | Customer | undefined;

  constructor(private scannerService: ScannerService) {
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    this.scannerInput?.nativeElement.focus();
    if (this.value.length === 13) {
      console.log('this.value=', this.value)
      this.scannedItem = this.scannerService.get(this.value);
      this.value = '';
    }
  }
}
