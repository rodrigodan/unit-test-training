// import { getCurrencies } from "./getCurrencies"

import { getCurrencies } from './getCurrencies';

// describe('getCurrencies',()=>{
//     it('test as moedas americana, australiana e europeia sao retornadas corretamente',()=>{
//         expect(getCurrencies()).toContain('USD');
//         expect(getCurrencies()).toContain('AUD');
//         expect(getCurrencies()).toContain('EUR');
//     });
//     it('test numero de elementos é igual a 3',()=>{
//         expect(getCurrencies().length).toBeGreaterThan(2)
//     })
// })

describe('getCurrencies', () => {
  it('teste se as moedas americanas, europeias e canadenses são retornadas do método getCurrencies', () => {
    // expect(getCurrencies()).toContain('USD');
    // expect(getCurrencies()).toContain('EUR');
    // expect(getCurrencies()).toContain('AUD');

    expect(getCurrencies()).toEqual(['USD', 'AUD', 'EUR']);
  });

  it('teste se o número de elementos é igual a 3', () => {
    expect(getCurrencies().length).toBeGreaterThan(2);
  });
});
