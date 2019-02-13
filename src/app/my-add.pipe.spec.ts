import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('should add 2 numbers', () => {
    const pipe = new MyAddPipe();
    expect(pipe.transform(5,10)).toEqual(15);
  });
});
