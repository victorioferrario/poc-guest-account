import { async, TestBed } from '@angular/core/testing';
import { GuestAccountModule } from './guest-account.module';

describe('GuestAccountModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GuestAccountModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GuestAccountModule).toBeDefined();
  });
});
