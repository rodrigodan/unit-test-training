
// import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';

import { from } from 'rxjs';

export class TodoService { 
  constructor() { 
  }

  add(value: number) {
    // return this.http.post('https://angular.io/guide/http', todo).pipe(map((r:any) => r.json()));
    return from([   [1,2,3] ]);

  }

  getTodos() { 
    // return this.http.get('https://angular.io/guide/http').pipe(map((r:any) => r.json()));
    return from([   [1,2,3] ]);


  }

  delete(id: number) {
    // return this.http.delete('https://angular.io/guide/http').pipe(map((r:any) => r.json()));
    return from([   [1,2,3] ]);

  }
}