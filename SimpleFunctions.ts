// --- Funktionen ohne Parameter und ohne Rückgabewert --- //

function ohneParam() {
}

function ohneParam1() {
    //Am Ende einer Funktion ohne Rückgabewert darf ein return ohne Wert vorkommen
    return;
}

function ohneParam2() {
    //Undefined darf auch bei keinem Rückgabewert zurückgeben werden
    return undefined;
}

function ohneParam3() {
    //Null darf auch bei keinem Rückgabewert zurückgeben werden
    return null;
}

//Funktion ohne Parameter mit Rückgabewert void. In diesem Fall muss nichts zurückgegeben werden.
function ohneParam4():void {
}

function ohneParam5():void {
    //Beim Datentyp void darf undefined zurückgegeben werden
    return undefined;
}

function ohneParam6():void {
   //Beim Datentyp void darf null zurückgegeben werden
    return null;
}

// --- Funktionen ohne Parameter mit Rückgabewert ---

function mitRueckgabe1():number {
     return 1;
}

function mitRueckgabe2():string {
    return "Hallo";
}

function mitRueckgabe3():any {
    //Bei any kann ein Wert mit einem beliebigen Typ zurückgegeben werden.
    return 3;
}

function mitRueckgabe4():any {
    return "Hallo";
}

// --- Funktionen mit Parameter ---

//Datentyp muss beim Parameter nicht angegeben werden
function mitParam1(value):number {
    //Sollte nun ein Wert nicht vom Typ number zurückgegeben werden, so führt diese Zeile zum Fehler
    return value*value;
}

function mitParam2(value:number):number {
    let value2 = 10;
    return value*value2;
}

function mitParam3(value1:number, value2:number, value3:number):number {
    return value1*value2*value3;
}

// --- Funktion mit beliebiger Anzahl von Parametern ---
function beliebig1(...params:number[]) {
    //Zugriff auf die Parameter erfolgt über Arrayzugriff
    let value1:number = params[0];
}

//Rest-Parameter ohne Datentyp
function beliebig1a(...params) {
    //Zugriff auf die Parameter erfolgt über Arrayzugriff
    let value1:number = params[0];
}

//Aufrufe der Funktion mit einem Wert
beliebig1(1);
//Es kann eine beliebige Parameterzahl übergeben werden
beliebig1(1,2,3,4);
//Die Funktion kann auch ohne Werte aufgerufen werden
beliebig1();

let aArray:number[] = [1, 2, 3, 4, 5];
//Ein Array kann über den spread-Operator übergeben werden
beliebig1(...aArray);

function beliebig4(value1:number, value2: number, ...params:number[]) {
}



function beliebig2(param1:number, param2:number, ...params:number[]):number {
    //Zugriff auf die Parameter erfolgt über Arrayzugriff
    if (params != undefined && params.length > 0) {
        let value1:number = params[0];
        return value1;
    }
    return param1;
}

//Gibt den Wert 3 zurück
beliebig2(1, 2, 3, 4, 5, 6)
//Gibt den Wert 2 zurück
beliebig2(1,2);

//Angabe eines Datentyps ist nicht erforderlich
function beliebig3(...params) {
}
beliebig3(1, "H", "A");
beliebig3(1, 2, 3);
beliebig3("H", "A", "L");



// --- Funktion mit optionalen Parametern ---
//Parameter param3 muss nicht angegeben werden
function optional1(param1:number, param2:number, param3?: number) {
    //Prüfung ob param3 auch gesetzt ist
    if (param3 != undefined) {

    }
}

optional1(1, 2, 3);
optional1(1, 2);



// --- Funktion mit default-Werten ---
function default1(param1:number, param2:number, param3: number = 5):number {
    return param3;
}

//Gibt den Wert 3 zurück
default1(1, 2, 3);
//Gibt den Wert 5 zurück
default1(1, 2);

function default2(param1:number, param2:number = 5, param3: number):number {
    return param2;
}

//Gibt den Wert 2 zurück
default2(1, 2, 3);
//Gibt den Wert 5 zurück
default2(1, undefined, 3);

//Gibt den Wert null zurück
default2(1, null, 3);


function default3(param1:number, param2:number = 4, param3:number = 5):number {
    return param2+param3;
}
//Gibt den Wert fünf zurück
default3(1,2,3);
//Gibt den Wert 9 zurück
default3(1);
//Gibt den Wert 6 zurück
default3(1,1);
//Gibt den Wert 7 zurück
default3(1,undefined,3);

// --- this, arguments

function test1(value1:number, value2:string, value3:number):number {
    console.log(arguments);
    return undefined;
}

test1(1,"a", 2);
