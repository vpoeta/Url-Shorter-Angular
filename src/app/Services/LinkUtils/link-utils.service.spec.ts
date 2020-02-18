import { TestBed } from '@angular/core/testing';

import { LinkUtilsService } from './link-utils.service';

describe('LinkUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkUtilsService = TestBed.get(LinkUtilsService);
    expect(service).toBeTruthy();
  });
});
