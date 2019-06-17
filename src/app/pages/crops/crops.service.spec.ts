import { TestBed } from '@angular/core/testing';

import { CropsService } from './crops.service';

describe('CropsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CropsService = TestBed.get(CropsService);
    expect(service).toBeTruthy();
  });
});
