let my = {}
my.peopleList = []
my.listen = function(fn) {
    this.peopleList.push(fn)
}
my.triger = function(s) {
    for(let i = 0; i < this.peopleList.length;i++) {
        this.peopleList[i].apply(this, [].slice.call(arguments))
    }
}

my.listen(function(name) {
    console.log(`${name}收到消息了`)
})

my.listen(function() {
    console.log(`hhhs`)
})
my.triger('王二')
my.triger('章三')