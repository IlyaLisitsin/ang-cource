import { OrderByPipe } from './order-by.pipe';
import {Cource} from "../../models";

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms', () => {
    const cource1 = new Cource();
    const cource2 = new Cource();

    cource1.title = 'aaa';
    cource2.title = 'bbb';
    const arr = [cource1, cource2];
    const pipe = new OrderByPipe();

    expect(JSON.stringify(pipe.transform(arr, 'title'))).toEqual(JSON.stringify([cource1, cource2]))

  })
});
