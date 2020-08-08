class P {
    constructor() {
        this.x = 10
        this.a()
    }
    a() {
        console.log(this.x)
    }
}
let a = new P()
console.log(a.a())