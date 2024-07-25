import { compute } from './compute';

//suit or group of specs or group of tests:
describe('compute', () => {
  //spec or test:
  it('test método compute deve retornar 0 para entradas negativas:', () => {
    //arrange
    const number = -1;
    //act
    const result = compute(number);
    //assert
    expect(result).toBe(0);
  });
  it('test método compute deve incrementar o valor da entrada para entradas positivas:', () => {
    //arrange:
    const number = 2;
    //act
    const result = compute(number);
    //assert
    expect(result).toEqual(3);
  });
});
