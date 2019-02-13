import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('Should multiply 2 numbers', () => {
    const pipe = new MyMultPipe();
    expect(pipe.transform(5,5)).toEqual(25);
  });
});
