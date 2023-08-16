import { TestBed } from '@angular/core/testing';

import { SavedataGuard } from './savedata.guard';

describe('SavedataGuard', () => {
  let guard: SavedataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SavedataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
