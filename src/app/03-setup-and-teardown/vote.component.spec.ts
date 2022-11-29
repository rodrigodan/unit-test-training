//arrangement
//act
//assert

import { VoteComponent } from "./vote.component";

describe('VoteComponent',()=>{
    //arrangement
    let component: VoteComponent;
    beforeEach(()=>{
        component = new VoteComponent();
    });

    it('test upVote',()=>{
        //act
        component.upVote();
        //assert
        expect(component.totalVotes).toBe(1);
    });
    it('test downVote',()=>{
        //act
        component.downVote();
        //assert
        expect(component.totalVotes).toBe(-1);
    });
})