/**
 * 单例模式的定义是产生一个类的唯一实例
 */

var singleton = function( fn ){
    var result;
    return function(){
        return result || ( result = fn .apply( this, arguments ) );
    }
}
 
var createMask = singleton( function(){
    return document.body.appendChild( document.createElement('div') );
})

class  SingletonApple {
    constructor(name, creator, products) {
        // first
        this.name = name;
        this.creator = creator;
        this.products = products;
       
    }
    //静态方法
    static getInstance(name, creator, products) {
        console.log(this)
        if(!this.instance) {
            this.instance = new SingletonApple(name, creator, products);
        }
        return this.instance;
    }
}


    let appleCompany = SingletonApple.getInstance('苹果公司', '乔布斯', ['iPhone', 'iMac', 'iPad', 'iPod']);
    let copyApple = SingletonApple.getInstance('苹果公司', '阿辉', ['iPhone', 'iMac', 'iPad', 'iPod'])
    
    console.log(appleCompany === copyApple); //true

