// --- Definition unterschiedlicher Enums

enum Farbe { Rot, Gruen, Blau};
let farbe:Farbe; 
farbe = Farbe.Rot;
console.log("1: Rot = " + Farbe.Rot + ", Gruen = " + Farbe.Gruen + ", Blau = " + Farbe.Blau);

enum Farbe1 { Rot=3, Gruen, Blau};
console.log("2: Rot = " + Farbe1.Rot + ", Gruen = " + Farbe1.Gruen + ", Blau = " + Farbe1.Blau);

enum Farbe2 { Rot, Gruen=3, Blau};
console.log("3: Rot = " + Farbe2.Rot + ", Gruen = " + Farbe2.Gruen + ", Blau = " + Farbe2.Blau);

enum Farbe2a { Rot, Gruen, Blau=3};
console.log("3a: Rot = " + Farbe2a.Rot + ", Gruen = " + Farbe2a.Gruen + ", Blau = " + Farbe2a.Blau);


console.log("3a: " + (Farbe2a.Gruen < Farbe2a.Blau));


enum Farbe3 { Rot, Gruen=0, Blau};
console.log("4: Rot = " + Farbe3.Rot + ", Gruen = " + Farbe3.Gruen + ", Blau = " + Farbe3.Blau);


enum Farbe4 { Rot=5, Gruen=10, Blau=15};
console.log("5: Rot = " + Farbe4.Rot + ", Gruen = " + Farbe4.Gruen + ", Blau = " + Farbe4.Blau);

enum Farbe5 { Rot=-5, Gruen, Blau};
console.log("6: Rot = " + Farbe5.Rot + ", Gruen = " + Farbe5.Gruen + ", Blau = " + Farbe5.Blau);

console.log("Farbe[0] = " + Farbe[0]); // --> Rot

console.log("Farbe1[0] = " + Farbe1[0]); // --> undefined
console.log("Farbe1[3] = " + Farbe1[3]); // --> Rot
console.log("Farbe3[0] = " + Farbe3[0]); // --> Gruen
console.log("Farbe4[5] = " + Farbe4[5]); // --> Rot
console.log("Farbe5[-5] = " + Farbe5[-5]); // --> Rot


enum SFarbe1 { Rot="ROT", Gruen="GRÜN", Blau=7};

console.log(SFarbe1[7]); // --> Ausgabe Blau
console.log(SFarbe1["ROT"]); // --> undefined