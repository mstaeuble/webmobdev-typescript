
interface IFValue {
    op1: number;
    op2: number;
}

function calculate(value:{op1:number, op2:number}):number {
    return value.op1+value.op2;
}

let result1 = calculate({op1:10, op2:20});
let value= {op1:30, op2:40};
let result2 = calculate(value);

let val1 = {op1:10, op2:20, op3:30};
let result2a = calculate(val1);


let value2:IFValue = {op1:30, op2:40};
let result3 = calculate(value2);

function calculateIF(value:IFValue):number {
    return value.op1+value.op2;
}

let result4 = calculateIF({op1:10, op2:20});
let value3= {op1:30, op2:40};
let result5 = calculateIF(value);

let value4:IFValue = {op1:30, op2:40};
let result6 = calculateIF(value2);

function calculate1(calculator:{calc(value:IFValue):number}):number {
    return calculator.calc({op1:10, op2:20});
}

console.log("1: ", calculate1({calc:calculateIF}));
console.log("2: ", calculate1({calc:(x:IFValue) => x.op1+x.op2 }));

function calculate2(calculator:{val:IFValue, calc(value:IFValue):number}):number {
    return calculator.calc({op1:calculator.val.op1, op2:calculator.val.op2});
}

console.log("3: ", calculate2({val:{op1:40, op2:50}, calc:calculateIF}));
console.log("4: ", calculate2({val:{op1:40, op2:50},calc:(x:IFValue) => x.op1+x.op2 }));

interface IFCalculator {
    val:IFValue;
    calc(x:IFValue):number;
}


function calculate3(calculator:IFCalculator):number {
    return calculator.calc({op1:calculator.val.op1, op2:calculator.val.op2});
}

console.log("5: ", calculate3({val:{op1:40, op2:50}, calc:calculateIF}));
console.log("6: ", calculate3({val:{op1:40, op2:50},calc:(x:IFValue) => x.op1+x.op2 }));

function calculate4(calculator:IFCalculator1):number {
    return calculator.calc();
}


interface IFCalculator1 {
    val:IFValue;
    calc(): number;
}

console.log("7: ", calculate4(
        {   
            val:{op1:40, op2:60},
            calc: function() { return this.val.op1 + this.val.op2; } 
        }
    )
);

interface IFOptional1 {
    name?:string;
    value:number;
}

class MyAdder1 {
    val: IFValue;
    
    constructor(op1:number, op2:number) {
        this.val = {op1:op1, op2:op2};
    }

    calc(): number {
        return this.val.op1 + this.val.op2;
    }
}


class MyAdder2 implements IFCalculator1 {
    val: IFValue;
    constructor(op1:number, op2:number) {
        this.val = {op1:op1, op2:op2};
    }    
    calc(): number {
        return this.val.op1 + this.val.op2;
    }
}


console.log("8: ",calculate4(new MyAdder1(20, 40)));

console.log("9: ",calculate4(new MyAdder2(30, 40)));

interface IFAdder {
    add(...params):number;
}

interface IFSubtractor {
    sub(...params):number;
}

class MyCalculator implements IFAdder, IFSubtractor {
    
    sub(...params: any[]): number {
        let result:number = 0;
        if (params != null && params.length > 0) {
            result = params[0];
            for (let index:number = 1; index < params.length; ++ index) {
                result -= params[index];
            }
        }
        return result;
    }
   
    add(...params: any[]): number {
        let result:number = 0;
        if (params != null && params.length > 0) {
            for (let index:number = 0; index < params.length; ++ index) {
                result += params[index];
            }
        }
        return result;
    }
}