import { greet } from "./greet"

describe('greet',()=>{
    it('test mensagem retornada está correta',()=>{
        expect(greet('Joao')).toContain('Joao');
    })
})