import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerComponent } from './scanner.component';
import {ScannerService} from "../scanner.service";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('ScannerComponent', () => {
  let component: ScannerComponent;
  let fixture: ComponentFixture<ScannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerComponent],
      providers: [{ provide: ScannerService, useValue: {}}],
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
