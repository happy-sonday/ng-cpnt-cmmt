import { TestBed } from '@angular/core/testing';

import { CheckListDataService } from './check-list-data.service';

describe('CheckListDataService', () => {
  let service: CheckListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
