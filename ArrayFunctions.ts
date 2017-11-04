let testNumberArray:number[] = [1,2,3,4];
//Ausgabe 1: Länge = 4 , [ 1, 2, 3, 4 ]
console.log("1: Länge = %d", testNumberArray.length,",", testNumberArray);

testNumberArray.push(5);
//Ausgabe 2: Länge = 5 , [ 1, 2, 3, 4, 5 ]
console.log("2: Länge = %d", testNumberArray.length,",", testNumberArray);

//Letztes Element aus Array zurückliefern und aus Array löschen
let element:number = testNumberArray.pop();
//Ausgabe 3: element = 5
console.log("3: element = " +element);
//Ausgabe 4: Länge = 4 , [ 1, 2, 3, 4 ]
console.log("4: Länge = %d", testNumberArray.length,",", testNumberArray);

let neuesArray:number[] = testNumberArray.concat([5, 6, 7, 8]);
//Ausgabe 5: Länge = 8 , [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log("5: Länge = %d", neuesArray.length,",", neuesArray);

let ganzNeuesArray:number[] = testNumberArray.concat(testNumberArray);
//Ausgabe 6: Länge = 8 , [ 1, 2, 3, 4, 1, 2, 3, 4 ]
console.log("6: Länge = %d", ganzNeuesArray.length,",", ganzNeuesArray);

//Ausgabe 7: 1 2 3 4 1 2 3 4
console.log("7: " + ganzNeuesArray.join(" "));

//Ausgabe 7.1: 1,2,3,4,1,2,3,4
console.log("7.1: " + ganzNeuesArray.join());

let unsortStringArray: string[] = ["c", "k", "a", "j", "b", "x", "v"];
//Ausgabe 8: a,b,c,j,k,v,x
console.log("8: " + unsortStringArray.sort());

let unsortTextArray: string[] = ["cc", "ca", "cb", "cac", "cab", "de", "da"];
//Ausgabe 9: ca,cab,cac,cb,cc,da,de
console.log("9: " + unsortTextArray.sort());

let unsortNumArray: number[] = [10, 2, 5, 1, 7, 25, 30, 9];
unsortNumArray.sort(function(a, b) {
  return a - b;
});
//Ausgabe 10: 1,2,5,7,9,10,25,3
console.log("10: " + unsortNumArray);
