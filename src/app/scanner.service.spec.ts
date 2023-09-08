import { TestBed } from '@angular/core/testing';

import { ScannerService } from './scanner.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ScannerService', () => {
  let service: ScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
