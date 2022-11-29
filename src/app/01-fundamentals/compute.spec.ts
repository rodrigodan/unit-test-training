import { compute } from "./compute";

describe('compute',()=>{
    it('testar se o valor retornado para um dado negativo ta igual 0',()=>{
        expect(compute(-1)).toBe(0);
    });
    it('testar se o valor retornado para um dado positivo da igual ao seu incremento',()=>{
        expect(compute(9)).toBe(10);
    })
})