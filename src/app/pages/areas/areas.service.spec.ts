import { TestBed } from '@angular/core/testing';

import { AreasService } from './areas.service';

describe('AreasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreasService = TestBed.get(AreasService);
    expect(service).toBeTruthy();
  });
});
