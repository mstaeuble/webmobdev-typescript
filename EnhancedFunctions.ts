// ----- this bei benamter Funktion

    console.log("--- 1. Start ---")
    function mult1(value1: number, value2: number):number {
        console.log("1. this = ", this);
        return value1 * value2;
    }

    mult1(2,3);

    console.log("--- 1. Ende ---")
    
// ----- arguments bei benamter Funktion

console.log("--- 2. Start ---")

function etest1() {
    console.log(arguments.length)
}

etest1();

function etest2(value1: number) {
    console.log("1:", arguments.length)
    
    console.log("2:", value1);
    console.log("3:", arguments[0]);

    arguments[0] *= 2;

    console.log("4:", value1);
    console.log("5:", arguments[0]);
   
}

etest2(2);


console.log("--- 2. Ende ---")


// ----- Anonyme Funktion

console.log("--- 3. Start ---")

//Benamte Funktion ohne Angabe von Datentypen
function fAdd1(value1, value2) {
    return value1+value2;
}

let myAnonFunc1 = function(value1, value2) {
    return value1 + value2;
}

myAnonFunc1(2, 3);

//Benamte Funktion mit Angabe von Datentypen
function fAdd2(value1:number, value2:number):number {
    return value1+value2;
}

let myAnonFunc2 = function(value1:number, value2:number):number {
    return value1 + value2;
}

myAnonFunc2(2, 3);

/*
let myAnonFunc1 = function(value1: number, value2:number):number {
    console.log("1. myAnonFunc1:", this);
    console.log("2. myAnonFunc1:", arguments);
    return value1 + value2;
}
//Aufruf der Funktion
myAnonFunc1(1, 2);
*/
console.log("--- 3. Ende ---")

// --- Test


function add(value1:number, value2:number):number {
    return value1 + value2;
}

let myValue = add(3,4);
//let myFunc2: (value1: number, value2:number) => number = function(value1: number, value2:number):number {

let myAdd = (value1:number, value2:number) => { 
    console.log("1: " + this);
   // console.log("2: " + arguments);
    return value1 + value2 
}

myAdd(4,5);
/*
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            console.log(this);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
*/


//console.log("card: " + pickedCard.card + " of " + pickedCard.suit);



// ---- Arrow-Funktionen
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Functions/Pfeilfunktionen#Kürzere_Funktionen
//https://basarat.gitbooks.io/typescript/content/docs/arrow-functions.html
//https://blog.mariusschulz.com/2016/12/23/typescript-2-1-object-rest-and-spread 

let myArrow1 = (value1, value2) => value1 + value2;
console.log(" myArrow1:", myArrow1(1,2));

let myArrow2 = (value1, value2) => {
    let temp:number = value1;
    temp *= 2 + value2;
    return temp;
}
console.log(" myArrow2:", myArrow2(1,2));

let myArrow3: (value1: number, value2:number) => number = function(value1: number, value2:number):number {
    return value1 + value2;
}

let myArrow3a: (value1: number, value2:number) => number = function(value1, value2){
    return value1 + value2;
}

console.log("typeof myArrow3:", (typeof myArrow3));

let increment = x => x+1;
console.log("inc : " + increment(4));

let myArrow4 = () => 5;

let myArrow5 = () => ({x:5});

console.log(myArrow5());

let myArrow6 = () => ({});
