import { TestBed, async, inject } from '@angular/core/testing';
import { RouterModule} from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { Store } from "@ngrx/store";

import { AuthGuard } from './auth.guard';
import { MockStore } from "../../mocks/store";

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule,
      ],
      providers: [
        AuthGuard,
        { provide: Store, useClass: MockStore },
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
