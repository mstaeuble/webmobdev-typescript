let aNumberArray: number[] = [1, 2, 3, 4];
let simpleNumberArray: Array<number> = [1, 2, 3, 4];
console.log(simpleNumberArray[0]);

let anyArray:any[] = ["Hallo", 42, "Welt"];
let anyArray2: Array<any> = ["Hallo", 42, "Welt"];

let aTuple: [string, string, number] = ["hallo", "welt", 42];

aTuple[3] = "Ein";
aTuple[4] = "Test";
aTuple[5] = 1;
aTuple[6] = 6;
console.log(aTuple);