/**
 * 1. 原型链继承
 * 核心：将父类的实例作为子类的原型
 */

function SuperType(){
    this.property = true;
  }
  SuperType.prototype.getSuperValue = function(){
    return this.property;
  };
  
  function SubType(){
    this.subproperty = false;
  }
  // 继承自SuperType
  SubType.prototype = new SuperType();
  
  SubType.prototype.getSubValue = function (){
    return this.subproperty;
  };
  
  var instance = new SubType();
  console.log(instance.getSuperValue());//true

  function SuperType(){
    this.colors = ["red", "blue", "green"];
  }
  function SubType(){}
  
  SubType.prototype = new SuperType();
  
  var instance1 = new SubType();
  instance1.colors.push("black");
  console.log(instance1.colors); //"red,blue,green,black"
  
  var instance2 = new SubType(); 
  console.log(instance2.colors); //"red,blue,green,black"
  // 使用原型创建对象会存在多个实例对引用类型的操作会被篡改的问题
  // 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能
  // 不能传递参数

  /**
   * 2. 借用构造函数继承
   */

  function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  
  function SubType(name, age){
    // 继承自SuperType
    SuperType.call(this, name);
    
    this.age = age;
  }
  
  var instance1 = new SubType("Nicholas", 29);
  instance1.colors.push("black");
  console.log(instance1.colors);    //"red,blue,green,black"
  
  var instance2 = new SubType();
  console.log(instance2.colors);    //"red,blue,green"
  
  console.log(instance1.name); // "Nicholas"
  console.log(instance1.age); // 29
  //缺陷：
  //（1）只能继承父类的实例属性和方法，不能继承原型属性/方法
  //（2）无法实现复用，每个子类都有父类实例函数的副本，影响性能

  /**
   * 3. 组合继承
   * 核心：结合原型链继承和构造函数继承通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
  */

 function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  SuperType.prototype.sayName = function(){
    console.log(this.name);
  };
  
  function SubType(name, age){
    //继承属性
    SuperType.call(this, name);
    this.age = age;
  }
  
  // 继承方法
  SubType.prototype = new SuperType(); 
  SubType.prototype.constructor = SubType; 
  SubType.prototype.sayAge = function(){
      console.log(this.age);
  };
  
  var instance1 = new SubType("Nicholas", 29);
  instance1.colors.push("black");
  console.log(instance1.colors); //"red,blue,green,black"
  instance1.sayName(); //"Nicholas";
  instance1.sayAge(); //29
  
  var instance2 = new SubType("Greg", 27);
  console.log(instance2.colors); //"red,blue,green"
  instance2.sayName(); //"Greg";
  instance2.sayAge(); //27

  //父类中的实例属性和方法既存在于子类的实例中，又存在于子类的原型中，不过仅是内存占用，因此，在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法

/**
 * 4. 原型式继承
 */

function object(obj){
    function F(){}
    F.prototype = obj;
    return new F();
  }
  object() // 对传入其中的对象执行了一次浅复制，将F的原型直接指向传入的对象
  
  var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
  };
  
  var anotherPerson = object(person);
  anotherPerson.name = "Greg";
  anotherPerson.friends.push("Rob");
  
  var yetAnotherPerson = object(person);
  yetAnotherPerson.name = "Linda";
  yetAnotherPerson.friends.push("Barbie");
  
  alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie
  //缺点：
//（1）原型链继承多个实例的引用类型属性指向相同，存在篡改的可能
//（2）无法传递参数



  //5. 寄生式继承

  //核心：在原型式继承的基础上，增强对象，返回构造函数

function createAnother(original){ 
  var clone=object(original); // 过调用函数创建一个新对象
  clone.sayHi = function(){ // 以某种方式增强这个对象
    alert("hi");
  };
  return clone; // 返回对象
}
///函数的主要作用是为构造函数新增属性和方法，以增强函数

var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi(); //"hi"
//缺点：
//（1）原型链继承多个实例的引用类型属性指向相同，存在篡改的可能
//（2）无法传递参

//6. 寄生组合式继承
//核心：结合借用构造函数传递参数和寄生模式实现继承

function inheritPrototype(subType, superType){
  var prototype = Object.create(superType.prototype); //创建对象
  prototype.constructor = subType;                    // 增强对象
  subType.prototype = prototype;                      // 指定对象
}

// 父类初始化实例属性和原型属性
function SuperType(name){
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
  alert(this.name);
};

// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
function SubType(name, age){
  SuperType.call(this, name);
  this.age = age;
}

// 将父类原型指向子类
inheritPrototype(SubType, SuperType);

// 新增子类原型属性
SubType.prototype.sayAge = function(){
  alert(this.age);
}

var instance1 = new SubType("xyc", 23);
var instance2 = new SubType("lxy", 23);

instance1.colors.push("2"); // ["red", "blue", "green", "2"]
instance1.colors.push("3"); // ["red", "blue", "green", "3"]
