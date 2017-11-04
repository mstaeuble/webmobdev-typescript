class BaseClass8 {
    //Öffentliche Property
    public name:string;
    //Ohne Zugriffsmodifikator -> public
    
    //Kann innerhalb BaseClass8 und Unterklassen genutzt werden
    protected value:number;
    
    //Kann nur innerhalb BaseClass8 genutzt werden
    private text:string;



    constructor(name:string) {
    }
}

class Simple8 extends BaseClass8 {

    //Explizite Markierung mit public
    public constructor(name:string, value:number) {
        super(name);
        this.value = value;
    }
}

let mySimple8:Simple8 = new Simple8("test8",10);
console.log("mySimple8.name =",mySimple8.name);

class Simple9 {
    anotherValue:number;
    
    /**
     * Konstruktor
     * @param name Automatisch wird name als public Property angelegt und mit dem übergebenen Wert initialisiert.
     * @param value Automatisch wird name als protected Property angelegt und mit dem übergebenen Wert initialisiert.
     * @param text Automatisch wird name als private Property angelegt und mit dem übergebenen Wert initialisiert.
     * @param anotherValue Für die Speicherung des übergebenen Wertes muss eine Property in der Klasse angelegt werden.
     */
    constructor(public name:string, protected value:number, private text:string, anotherValue:number) {
        this.anotherValue = anotherValue;
    }
}

