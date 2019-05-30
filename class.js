class T {
    static x = 'a'
    static y = 'b'
    static hh = 'qwer'
    constructor(x, y) {
    }
    async toString() {
        let a = await Promise.resolve(T.x + T.y)
    }
    printName = (name = 'there') => {
        this.print(`Hello ${name}`);
    }
    static print(text = 'hhhh') {
        console.log(text);
      }
}
class subT extends T {
    constructor() {
        super()
        console.log(super.toString())

    }
}

console.log('subT.__proto__-->', subT.__proto__)
console.log('subT.prototype.__proto__-->', subT.prototype.__proto__)
