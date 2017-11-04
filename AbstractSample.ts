//Abstrakte Klasse.
//Kann nicht instanziiert werden.
abstract class SampleAbstractClass1 {

    constructor(public name:string) {}

    protected printName() {
        console.log("name = " + this.name);
    }

    //Abstrakte Methoden haben in der abstrakten Klasse keine Implementierung
    abstract doSomething();
}

class SampleConcreteClass1 extends SampleAbstractClass1 {
    constructor() {
        super("SampleConcreteClass1");
    }
    
    //Abstrakte Methode wird in der konkreten Klasse implementiert
    doSomething() {
        this.printName();
    }
}

let mySampleConcreteClass1:SampleConcreteClass1 = new SampleConcreteClass1;
mySampleConcreteClass1.doSomething();