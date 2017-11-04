class StaticSample1 {

    static value:number = 10;

    static info():string {
        return "value = " + StaticSample1.value;
    }

}

console.log("StaticSample1.value =", StaticSample1.value);
console.log("StaticSample1.info() =", StaticSample1.info());
