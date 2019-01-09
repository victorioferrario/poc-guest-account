import { async, TestBed } from '@angular/core/testing';
import { FolioModule } from './folio.module';

describe('FolioModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FolioModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FolioModule).toBeDefined();
  });
});
