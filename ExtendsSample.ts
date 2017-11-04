class Parent0 {
    private value:number;
    constructor(value:number) {
        this.value = value;
    }

    info(): string {
        return "value = " + this.value;
    }
}

class Child0 extends Parent0 {
    private name:string;
    constructor(value:number, name:string) {
        super(value);
        this.name = name;
    }

    info():string {
        //Aufruf von info der Oberklasse über super.info()
        return "name = " + this.name + ", " +  super.info();
    }
}

let myChild0:Child0 = new Child0(10, "Child0");
console.log(myChild0.info());