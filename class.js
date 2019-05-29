class T {
    x = 'a'
    y = 'b'
    static hh = 'qwer'
    constructor(x, y) {
        
    }
    async toString() {
        let a = await this.x + this.y
        console.log(a)
        console.log(T.hh)
    }
    printName = (name = 'there') => {
        this.print(`Hello ${name}`);
    }
    static print(text = 'hhhh') {
        console.log(text);
      }
}
let a = new T()
console.log(T.print())
console.log(a.toString())
