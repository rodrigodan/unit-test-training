import { VoteComponent } from "./vote.component";

describe('VoteComponent',()=>{
    let component: VoteComponent;
    beforeEach(()=>{
        component = new VoteComponent();
    }) 
    it('upVote',()=>{
        let value = 0;
        component.voteChanged.subscribe((data:number)=>{
            value = data;
        });
        component.upVote();
        expect(value).toBe(1);
    })
})