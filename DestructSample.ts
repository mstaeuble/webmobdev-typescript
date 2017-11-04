let ds1:number;
let ds2:number;


[ds1, ds2] = [30, 40];
console.log("1: ds1 = %d, ds2 = %d", ds1, ds2);

let dsArray1:number[];
[ds1, ds2, ...dsArray1] = [30, 40, 50, 60, 70, 80];

console.log("2: dsArray1 =", dsArray1);

let dsArray2:number[] = [4, 5, 6, 7, 8];
[ds1, ds2] = dsArray2;
//Ausgabe: ds1 = 4, d2 = 5
console.log("3: ds1 = %d, ds2=  %d", ds1, ds2);

[ds1 = 5, ds2 = 10] = [12];
//Ausgabe: ds1 = 12, d2 = 10
console.log("4: ds1 = %d, ds2 = %d", ds1, ds2);

function multipleValues1() {
    return [7, 8];
}

[ds1, ds2] = multipleValues1();
//Ausgabe: ds1 = 7, d2 = 8
console.log("5: ds1 = %d, ds2 = %d", ds1, ds2);

function multipleValues2():[number, number, number] {
    return [5, 10, 15];
}

//Dritte Wert (15) wird ignoriert
[ds1, ds2] = multipleValues2();
//Ausgabe: ds1 = 5, d2 = 10
console.log("6: ds1 = %d, ds2 = %d", ds1, ds2);
//Zweiter Wert (10) wird übersprungen
[ds1, ,ds2] = multipleValues2();
//Ausgabe: ds1 = 5, d2 = 15
console.log("7: ds1 = %d, ds2 = %d", ds1, ds2);

ds1 = 10;
ds2 = 60;
[ds1, ds2] = [ds2, ds1];
//Ausgabe: ds1 = 60, ds2 = 10
console.log("8: ds1 = %d, ds2= %d", ds1, ds2);

({ds1, ds2} = {ds2:10,ds1:20});
//Ausgabe: ds1 = 20, d2 = 10
console.log("9: ds1 = %d, ds2= %d", ds1, ds2);

({ds1, ds2} = {ds1:10,ds2:20});
//Ausgabe: ds1 = 10, d2 = 20
console.log("10: ds1 = %d, ds2= %d", ds1, ds2);

let {ds3, ds4} = {ds3:100, ds4:200};
//Ausgabe: ds3 = 100, ds4 = 200
console.log("11: ds3 = %d, ds4= %d", ds3, ds4);

let {ds1:ds5, ds2:ds6} = {ds1:80, ds2:90};
//Ausgabe: ds5 = 80, ds6 = 90
console.log("12: ds5 = %d, ds6= %d", ds5, ds6);

function defaultParams1({sValue1 = "a", sValue4="b", sValue5="c"}={}) {

}
defaultParams1();
defaultParams1({sValue5:"k"});

console.debug("Text");