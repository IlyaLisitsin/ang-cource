import { TestBed, inject } from '@angular/core/testing';

import { CourceService } from '../../components/cources/services/cource.service';

describe('CourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourceService]
    });
  });

  it('should be created', inject([CourceService], (service: CourceService) => {
    expect(service).toBeTruthy();
  }));
});
