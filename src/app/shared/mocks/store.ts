import { of } from "rxjs";

export class MockStore {

  dispatch() {}

  select(data) {
    return of(data);
  }
}
