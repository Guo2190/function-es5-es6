class Order {
  // 用于维护依赖关系的map
  static modules = new Map()
  constructor(){
    for(let module of Order.modules.values()){
      // 调用模块依赖方法
      module.init(this)
    }
  }
  // 向依赖关系中Map注入模块

  static injet(module){
    Order.modules.set(module.constructor.name, module)
  }
}

class Rate{
  init(order) {
    order.rate = this
  }
  star(stars){
    console.log('您对订单的评价为%s星',stars);
}
}

let rate = new Rate()
// 注入依赖
// 依赖注入就是把高层模块的所依赖的低层次以参数的方式注入其中，这种方式可以修改低层次依赖而不影响高层次依赖。




Order.injet(rate)
let order = new Order()
order.rate.star(12)
