
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

export class TodoFormComponent { 
  form: FormGroup; 

  constructor(fb: FormBuilder) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('')
    });
  }
}