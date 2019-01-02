import { TestBed, async, inject } from '@angular/core/testing';

import { My.GuardGuard } from './my.guard.guard';

describe('My.GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [My.GuardGuard]
    });
  });

  it('should ...', inject([My.GuardGuard], (guard: My.GuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
