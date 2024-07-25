// import { TestBed } from "@angular/core/testing";
// import { from, throwError } from "rxjs";
// import { TodoService } from "./todo.service";
// import { TodosComponent } from "./todos.component"

import { TestBed } from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, Observable, throwError } from 'rxjs';

// describe('TodosComponent',()=>{
//     let component: TodosComponent;
//     let service: TodoService;
//     beforeEach(()=>{
//         TestBed.configureTestingModule({
//             declarations: [TodosComponent],
//             providers: [TodoService]
//         });
//         component = TestBed.createComponent(TodosComponent).componentInstance;
//         service = TestBed.inject(TodoService);
//     });
//     it('add success',()=>{
//         let teste = [32,65,34];
//         spyOn(service,'add').and.returnValue(from([teste]))
//         component.add(10);
//         expect(component.todos).toEqual(teste);
//     });
//     it('add false',()=>{
//         let teste = 'Error server';
//         spyOn(service,'add').and.returnValue(throwError(teste));
//         component.add(10);
//         expect(component.message).toEqual(teste);
//     });
// })

describe('TodosComponent', () => {
  //arrangement
  let todosComponent: TodosComponent;
  let service: TodoService;

  let todoServiceStub: Partial<TodoService>;
  beforeEach(() => {
    todoServiceStub = {
      getTodos: (): Observable<number[]> => from([[9, 15, 20]]),
      add: (): Observable<number[]> => from([[8, 15, 20]]),
    };

    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      providers: [
        {
          provide: TodoService,
          useValue: todoServiceStub,
        },
      ],
    }),
      (todosComponent =
        TestBed.createComponent(TodosComponent).componentInstance);
    service = TestBed.inject(TodoService);
  });

  it('teste todos possui valores 1,2 e 3 atribuidos pós a inicialização do componente', () => {
    //act
    // spyOn(service, 'getTodos').and.returnValue(from([[10, 15, 20]]));
    todosComponent.ngOnInit();

    expect(todosComponent.todos).toEqual([9, 15, 20]);
  });

  it('teste add success', () => {
    //act
    // spyOn(service, 'getTodos').and.returnValue(from([[10, 15, 20]]));
    todosComponent.add(10);

    expect(todosComponent.todos).toEqual([8, 15, 20]);
  });

  it('teste add failure', () => {
    spyOn(service, 'add').and.returnValue(throwError(() => '404 Bad Request'));
    todosComponent.add(15);
    expect(todosComponent.message).toEqual('404 Bad Request');
  });
});
