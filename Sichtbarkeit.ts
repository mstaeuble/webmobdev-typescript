

class Test1 {
    meinTest() {
        //Auch in einer Klasse kann die Variable genutzt werden.
        console.log(sicht1);
    }
}


function sichtbar1() {
    //Variable kann trotzdem genutzt werden
    console.log(sicht1);
}
//Definition nach der Funktion
let sicht1: number = 5;


let pruef1: boolean = true;
let sicht2: number = 10;
if (pruef1) {
    let sicht2: number = 20;
    console.log("sicht2 =", sicht2);
}
console.log("sicht2 =", sicht2);

let sicht3: number = 10;
function sichtbar2() {
    let sicht3: number = 20;
    console.log("1: sichtbar2 =", sicht3);
}

sichtbar2();
console.log("2: sichtbar2 =", sicht3);

let sicht4: number = 10;
let sicht5: number = 20;
function sichtbar3(sicht4:number) {
    
    console.log("sichtbar3, %d",sicht4);
}
sichtbar3(sicht5);

for (let index1:number = 0; index1< 2; ++index1) {
}

let index2;
for (index2 = 0; index2 < 2; ++index2) {
    console.log("index2 = %d", index2);
}
console.log("1: index2 = %d", index2);

let index3 = 0;
for (let index3 = 0; index3 < 2; ++index3) {
    console.log("index2 = %d", index3);
}
console.log("1: index3 = %d", index3);


let index4 : number = 20;
for (let index4:number = 0; index4< 2; ++index4) {
    console.log("index4 = %d", index4);
}
console.log("index4 = %d", index4);

for (let index5: number = 0; index5 < 2; ++index5) {
    console.log("A, index5 = %d", index5);
    for (let index5: number = 0; index5 < 3; ++index5) {
        console.log("I, index5 = %d", index5);
    }
}