import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('Should check the even number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(6,'Even')).toEqual('It is Even number.');
  });

  it('Should check the odd number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(6,'Odd')).toEqual('It is not Odd number.');
  });

  it('Should check the perfect number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(6,'Perfect')).toEqual('It is Perfect number.');
  });

  it('Should check the prime number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(6,'Prime')).toEqual('It is not Prime number.');
  });

});
