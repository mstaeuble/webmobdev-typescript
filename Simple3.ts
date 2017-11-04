class Simple3 {
    propertyOhneDatentyp;
    propertyMitDatentyp:number;

    constructor () {
        this.propertyOhneDatentyp = "Ein Text";
    }

    aName: string;
    get name() {
        return this.aName;
    }
    set name(name:string) {
        this.aName = name;
    }

    info():string {
        return "" + "propertyOhneDatentyp = " + this.propertyOhneDatentyp + ", " +
            "propertyMitDatentyp = " + this.propertyMitDatentyp + ", name = " + this.name;
    }
}

let mySimple3:Simple3 = new Simple3();
mySimple3.propertyMitDatentyp = 5;
console.log(mySimple3.propertyMitDatentyp);

mySimple3.name = "Test";
console.log("Name = " + mySimple3.name);