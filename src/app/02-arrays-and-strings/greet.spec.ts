// import { greet } from "./greet"

import { greet } from './greet';

// describe('greet',()=>{
//     it('test mensagem retornada está correta',()=>{
//         expect(greet('Joao')).toContain('Joao');
//     })
// })

describe('greet', () => {
  it('teste mensagem retornada de cumprimento está correta', () => {
    expect(greet('João')).toContain('Welcome João');
  });
});
