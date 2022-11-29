
import { EventEmitter, Output, Component } from '@angular/core'; 

@Component({
    selector: 'vote-root',
    template: '<div></div>'
  })
export class VoteComponent { 
  totalVotes: number = 0; 
  @Output() voteChanged = new EventEmitter();

  upVote() { 
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}