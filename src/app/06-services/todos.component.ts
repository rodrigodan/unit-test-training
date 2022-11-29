
import { TodoService } from './todo.service';
import { Component } from '@angular/core';

@Component({
    selector: 'todo-root',
    template: '<div></div>'
  })
export class TodosComponent { 
  todos: any[] = [];
  message: string = ''; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    this.service.getTodos().subscribe((t:any) => this.todos = t);
  }

  add(value: number) { 
    this.service.add(value).subscribe(
      (t:any) =>{
        t.map((a:number)=>this.todos.push(a));
      },
      (err:any) =>{
          this.message = err;
      });
  } 

  delete(id: number) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
