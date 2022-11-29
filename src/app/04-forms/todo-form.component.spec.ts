import { FormBuilder } from "@angular/forms";
import { TodoFormComponent } from "./todo-form.component";

describe('TodoFormComponent',()=>{
    let component: TodoFormComponent;
    beforeEach(()=>{
        component = new TodoFormComponent(new FormBuilder());
    })
    it('test se o input name esta com validacao correta',()=>{
        let name = component.form.controls['name'];
        let email = component.form.controls['email'];
        name.setValue('teste');
        expect(name.valid).toBeTrue();
        expect(email.valid).toBeTrue();

    })
})