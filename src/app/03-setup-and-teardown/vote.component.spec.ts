// //arrangement
// //act
// //assert

import { VoteComponent } from './vote.component';

// import { VoteComponent } from "./vote.component";

// describe('VoteComponent',()=>{
//     //arrangement
//     let component: VoteComponent;
//     beforeEach(()=>{
//         component = new VoteComponent();
//     });

//     it('test upVote',()=>{
//         //act
//         component.upVote();
//         //assert
//         expect(component.totalVotes).toBe(1);
//     });
//     it('test downVote',()=>{
//         //act
//         component.downVote();
//         //assert
//         expect(component.totalVotes).toBe(-1);
//     });
// })

describe('VoteComponent', () => {
  let voteComponent: VoteComponent;

  beforeEach(() => {
    //arrangement
    voteComponent = new VoteComponent();
  });
  it('teste upVote', () => {
    //act
    voteComponent.upVote();
    //assert
    expect(voteComponent.totalVotes).toBe(1);
  });

  it('teste downvote', () => {
    //act
    voteComponent.downVote();
    //assert
    expect(voteComponent.totalVotes).toBe(-1);
  });
});
