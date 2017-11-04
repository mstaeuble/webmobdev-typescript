

class ReadonlySample1 {
    readonly value1:number = 10;
    readonly value2:number = 5;

    constructor() {
        this.value1 = 20;
    }
}

class ReadonlySample2 {
    private _value3:number = 30;
    get value3():number {
        return this._value3;
    }
}

//1. Einlegen einer Instanz von ReadonlySample1
let myReadonlySample1:ReadonlySample1 = new ReadonlySample1();
console.log("1: myReadonlySample1.value1 =", myReadonlySample1.value1);

//Definition eines Objektliterals mit Zuweisung der Instanz myReadonlySample1
let rd: {value1:number, value2:number} = myReadonlySample1;
console.log("2: rd.value1 =",rd.value1);
//Ändern des Wertes des Objektliterals 
rd.value1 = 40;
//Wert wurde geändert
console.log("3: rd.value1 =",rd.value1);
//Wert der Instanz myReadOnlySample1 ist auch geändert
console.log("4: rdS2.value1 =", myReadonlySample1.value1);
