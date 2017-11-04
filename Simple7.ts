class BaseClass7 {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
}

class Simple7 extends BaseClass7 {
    constructor(name:string, value:number) {
        super(name);
    }
} 

let mySimple7:Simple7 = new Simple7("test", 5);
console.log("1: mySimple7.name =", mySimple7.name);