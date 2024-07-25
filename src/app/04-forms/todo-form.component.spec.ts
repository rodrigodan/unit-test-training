// import { FormBuilder } from "@angular/forms";
// import { TodoFormComponent } from "./todo-form.component";

import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

// describe('TodoFormComponent',()=>{
//     let component: TodoFormComponent;
//     beforeEach(()=>{
//         component = new TodoFormComponent(new FormBuilder());
//     })
//     it('test se o input name esta com validacao correta',()=>{
//         let name = component.form.controls['name'];
//         let email = component.form.controls['email'];
//         name.setValue('teste');
//         expect(name.valid).toBeTrue();
//         expect(email.valid).toBeTrue();

//     })
// })

describe('TodoFormComponent', () => {
  let todoFormComponent: TodoFormComponent;
  beforeEach(() => {
    //arrangement:
    todoFormComponent = new TodoFormComponent(new FormBuilder());
  });
  it('teste se o input é válido', () => {
    let name = todoFormComponent.form.controls['name'];
    name.setValue('teste');
    let email = todoFormComponent.form.controls['email'];
    email.setValue('teste@teste');

    expect(name.valid).toBeTrue();
    expect(email.valid).toBeTrue();
  });
});
