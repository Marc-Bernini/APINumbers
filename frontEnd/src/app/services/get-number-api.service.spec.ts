import { TestBed } from '@angular/core/testing';

import { GetNumberAPIService } from './get-number-api.service';

describe('GetNumberAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetNumberAPIService = TestBed.get(GetNumberAPIService);
    expect(service).toBeTruthy();
  });
});
