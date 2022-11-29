import { TestBed } from "@angular/core/testing";
import { Model } from "./model";
import { PromisesComponent } from "./promises.component"
import { PromisesService } from "./promises.service";

describe('PromisesComponent',()=>{
    let component: PromisesComponent;
    let service: PromisesService;
    beforeEach(()=>{

        TestBed.configureTestingModule({
            declarations: [PromisesComponent],
            providers: [PromisesService]
        });
        component = TestBed.createComponent(PromisesComponent).componentInstance;
        service = TestBed.inject(PromisesService);
    })
    it('success getData',async ()=>{
        spyOn(service,'get').and.returnValue(new Promise((resolve,reject)=>{
            resolve(new Model('Av Cabo Branc0', 'João', 34534534))
        }));
        await component.getData(12);
        expect(component.modelElements[0].name).toBe('João');
    });

    // it('failed getData',async ()=>{
    //     let teste = 'Server error';
    //     spyOn(service,'get').and.returnValue(new Promise((resolve,reject)=>{
    //         reject(teste)
    //     }));
    //     await component.getData(12);
    //     expect(component.errorMessage).toBe(teste);
    // })
})