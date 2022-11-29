export class Model{
    public addres: string = '';
    public name: string = '';
    public phone: number = 0;
    constructor(addres: string, name: string, phone: number){
        this.addres = addres;
        this.name = name;
        this.phone = phone;
    }
}