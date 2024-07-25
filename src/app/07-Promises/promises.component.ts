import { Component } from '@angular/core';
import { Model } from './model';
import { PromisesService } from './promises.service';

@Component({
  selector: 'promises-root',
  template: '<div></div>',
})
export class PromisesComponent {
  modelElements: Array<Model>;
  errorMessage: string;

  constructor(private service: PromisesService) {
    this.modelElements = [];
    this.errorMessage = '';
  }

  getData(value: number) {
    this.service
      .get(value)
      .then((data: Model) => {
        this.modelElements.push(data);
        this.errorMessage = '';
      })
      .catch((type) => {
        this.errorMessage = type;
      });
  }
}
