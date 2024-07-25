import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable({
  providedIn: 'root',
})
export class PromisesService {
  get(value: number) {
    return new Promise<Model>((resolve, reject) => {
      setTimeout(() => {
        if (value > 10) {
          resolve(new Model('St. Edburgo', 'Nathan', 9843564356));
        } else {
          reject('Server Error');
        }
      }, 1000);
    });
  }
}
