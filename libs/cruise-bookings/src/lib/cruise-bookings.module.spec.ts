import { async, TestBed } from '@angular/core/testing';
import { CruiseBookingsModule } from './cruise-bookings.module';

describe('CruiseBookingsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CruiseBookingsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CruiseBookingsModule).toBeDefined();
  });
});
