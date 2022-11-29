import { TestBed } from "@angular/core/testing";
import { from, throwError } from "rxjs";
import { TodoService } from "./todo.service";
import { TodosComponent } from "./todos.component"

describe('TodosComponent',()=>{
    let component: TodosComponent;
    let service: TodoService;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [TodosComponent],
            providers: [TodoService]
        });
        component = TestBed.createComponent(TodosComponent).componentInstance;
        service = TestBed.inject(TodoService);
    });
    it('add success',()=>{
        let teste = [32,65,34];
        spyOn(service,'add').and.returnValue(from([teste]))
        component.add(10);
        expect(component.todos).toEqual(teste);
    });
    it('add false',()=>{
        let teste = 'Error server';
        spyOn(service,'add').and.returnValue(throwError(teste));
        component.add(10);
        expect(component.message).toEqual(teste);
    });
})