import { TestBed } from '@angular/core/testing';

import { KeywordService } from './keyword.service';

describe('MeetingsService', () => {
  let service: KeywordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeywordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
