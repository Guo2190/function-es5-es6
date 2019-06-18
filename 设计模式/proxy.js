let girl = function(name) {
    this.name = name
}

let dudu = function(girl) {
    this.girl = girl
    this.sendGift = (v) => {
        console.log(`hi ${this.girl.name}, dudu送你一个${v}`)
    }
}

let proxyTom = function (girl) {
    this.sendGift = (v) => {
        (new dudu(girl)).sendGift(v)
    }
}
let hh = new proxyTom(new girl('lili'))
hh.sendGift('ring')