// Datentypen.ts

// --- boolean ---

let bVar:boolean;
let bVar1:boolean = true;
let bVar2:boolean = false;

// --- string ---

let sVar1: string;
let sVar2: string = "Hallo Welt";
let sVar3: string = 'Hallo Welt';

let sVar4: string = "Hallo \"Welt\"";
let sVar5: string = 'Hallo "Welt"';
console.log("sVar4=",sVar4);
console.log("sVar5=",sVar5);

let sVar6 = "Tom"

let sVar7 = `Hello my Name is ${sVar6}. The age is ${40 + 5}`;
console.log(sVar7);

// --- number ---
let numVar1: number;
let numVar2: number = 5;
let numVar3: number = 5.0;

console.log("numVar1:",numVar2);
console.log("numVar2:",numVar3);

let numHex1 : number = 0xff;
let numHex2 : number = 0Xff;
let numHex3 : number = 0xFF;

let numOct1 : number = 0o711;
let numOct2 : number = 0O711;

let numBin1 : number = 0b10110
let numBin2 : number = 0B10110

console.log("numHex1:", numHex1); // -> Ausgabe: 255
console.log("numOct1:", numOct1); // -> Ausgabe: 457
console.log("numBin1:", numBin1); // -> Ausgabe: 22

// --- Symbol ---

let sym1:symbol;
sym1 = Symbol();

let sym2:symbol = Symbol();
let sym3:symbol = Symbol();

console.log("sym2 == sym3", sym2 == sym3 ? "gleich" : "nicht gleich");

let sym4:symbol = Symbol("foo");
let sym5:symbol = Symbol("foo");

console.log("sym4:",sym4); //sym4: Symbol(foo)
console.log("sym4 == sym5", sym4 == sym5 ? "gleich" : "nicht gleich");

let sym6:symbol = Symbol.for("foo");

let sym7:symbol = Symbol.for("foo");
let sym8:symbol = Symbol.for("foo");
console.log("sym7 == sym8", sym7 == sym8 ? "gleich" : "nicht gleich");

let symKey1:string = Symbol.keyFor(sym7);
console.log("symKey1:", symKey1);

let symKey2:string = Symbol.keyFor(sym1);
console.log("symKey2:", symKey2);

// --- object ---

let obVar1: object; 

let ooVar2 = {
    x: 10,
    y: 20
}

console.log("1: ooVar2.x =", ooVar2.x);

ooVar2.x = 15;

console.log("2: ooVar2.x =", ooVar2.x);
console.log('3: ooVar2["x"] =', ooVar2["x"]);

ooVar2["x"] = 25;
console.log('4: ooVar2["x"] =', ooVar2["x"]);

let ooVar3 = {
    x: 10,
    y: 20
}

ooVar3["z"] = 20;

console.log("5: ooVar3.z =", ooVar3["z"]);

let ooVar4: {x:number, y:number} = {
    x:10,
    y:10
}

let ooVar5: {}


let ooVar6 = {
    x:<number> undefined,
    y:10
}


let ooVar7 = {
    x:undefined as number,
    y:10
}

let ooVar8: {readonly x:number, y:number} = {
    x:10,
    y:10
}

const abc = "Test";
let cde = abc;

cde = "vv";


let vVar1: void;
vVar1 = null;
vVar1 = undefined;

let uVar1: undefined;
uVar1 = undefined;
uVar1 = null;
/*
let nVar1: null;
nVar1 = null;
nVar1 = undefined;
*/