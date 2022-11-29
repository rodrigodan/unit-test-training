import { getCurrencies } from "./getCurrencies"

describe('getCurrencies',()=>{
    it('test as moedas americana, australiana e europeia sao retornadas corretamente',()=>{
        expect(getCurrencies()).toContain('USD');
        expect(getCurrencies()).toContain('AUD');
        expect(getCurrencies()).toContain('EUR');
    });
    it('test numero de elementos é igual a 3',()=>{
        expect(getCurrencies().length).toBeGreaterThan(2)
    })
})