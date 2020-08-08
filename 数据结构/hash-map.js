// 散列表
// 线性探测法
// 开链法
class Maps {
    constructor() {
            this.table = new Array(135)

        }
        //  简单的散列函数
    simpleHash(data) {
            let total = 0
            for (let index = 0; index < data.length; index++) {
                total += data.charCodeAt(index)
            }
            console.log(data, 'total', total)

            return total % this.table.length
        }
        // 简单的散列函数
    betterHash(data) {
            let total = 0
            const h = 32
            for (let index = 0; index < data.length; index++) {
                total += h * total + data.charCodeAt(index)
            }
            console.log(data, 'total', total)

            return total % this.table.length
        }
        // 显示元素
    display() {
            for (let index = 0; index < this.table.length; index++) {
                if (this.table[index] !== void 0) {
                    console.log('键值是->' + index + '值是' + this.table[index])
                }

            }
        }
        // 插入元素
    put(data) {
            let key = this.betterHash(data)
            this.table[key] = data
        }
        // 线性插入元素
    linksput(data) {
            let index = 0
            let pos = this.betterHash(data)
            if (this.table[pos][index] === void 0) {
                this.table[pos][index] = data
                index++
            } else {
                while (this.table[pos][index] !== void 0) {
                    index++
                }
                this.table[pos][index] = data

            }

        }
        // 取元素
    getItem() {}
        //添加二维数组 开链法
    bulidTable() {
        for (let index = 0; index < this.table.length; index++) {
            this.table[index] = []

        }
    }

    linkDisplay() {
            for (let index = 0; index < this.table.length; index++) {
                if (this.table[index][0] !== void 0) {
                    console.log('键值是->' + index + '值是' + this.table[index])
                }

            }
        }
        //线性探测法（寻址法）
    linkPut(data) {
        let pos = this.betterHash(data)
        if (this.table[pos] === undefined) {
            this.table[pos] = data
        } else {
            while (this.table[pos] !== undefined) {
                pos++
            }
            this.table[pos] = data
        }
    }
    linkPutDisplay() {

        for (let index = 0; index < this.table.length; index++) {
            if (this.table[index] !== void 0) {
                console.log('键值是->' + index + '值是' + this.table[index])
            }

        }
    }
}
let map = new Maps()
map.linkPut('abc')
map.linkPut('china')
map.linkPut('bbb')
map.linkPut('ss')
map.linkPut('nicah')
map.linkPut('cba')
map.linkPut('cba')
map.linkPut('cba')
map.linkPut('cba')
map.linkPut('cba')
map.linkPutDisplay()
console.log(map.table)