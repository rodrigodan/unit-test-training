import { Model } from "./model"

export class PromisesService { 

    get(value: number){
        return new Promise<Model>((resolve,reject)=>{
            if(value > 10){
                resolve(new Model('St. Edburgo', 'Nathan', 9843564356));
            }
            else{
                reject('Server Error');
            }
        });
    }

}