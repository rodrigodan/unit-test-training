// import { VoteComponent } from "./vote.component";

import { TestBed } from '@angular/core/testing';
import { VoteComponent } from './vote.component';

// describe('VoteComponent',()=>{
//     let component: VoteComponent;
//     beforeEach(()=>{
//         component = new VoteComponent();
//     })
//     it('upVote',()=>{
//         let value = 0;
//         component.voteChanged.subscribe((data:number)=>{
//             value = data;
//         });
//         component.upVote();
//         expect(value).toBe(1);
//     })
// })

describe('teste VoteComponent', () => {
  let voteComponent: VoteComponent;

  beforeEach(() => {
    //arrangement

    TestBed.configureTestingModule({
      declarations: [VoteComponent],
    });

    let fixtureComponent = TestBed.createComponent(VoteComponent);
    voteComponent = fixtureComponent.componentInstance;
  });

  it('teste upvote', () => {
    let value: number = 0;
    voteComponent.voteChanged.subscribe((item: number) => {
      value = item;
    });
    voteComponent.upVote();

    expect(value).toEqual(1);
  });
});
