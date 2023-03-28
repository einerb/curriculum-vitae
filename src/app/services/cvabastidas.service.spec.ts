import { TestBed } from '@angular/core/testing';

import { CveinerbravoService } from './cveinerbravo.service';

describe('CveinerbravoService', () => {
  let service: CveinerbravoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CveinerbravoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
