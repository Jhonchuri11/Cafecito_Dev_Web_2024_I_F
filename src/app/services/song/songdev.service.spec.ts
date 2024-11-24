import { TestBed } from '@angular/core/testing';

import { SongdevService } from './songdev.service';

describe('SongdevService', () => {
  let service: SongdevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongdevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
