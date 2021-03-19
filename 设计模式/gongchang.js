
// 工厂模式是创建对象的常用设计模式 我门不能暴露创建对象的具体逻辑 而是将逻辑封装在具体函数中 这个函数就叫工厂函数
// 工厂模式根据抽象程度的不同可以分为：简单工厂，工厂方法和抽象工厂。 


//简单工厂 由一个工厂对象负责创建某一对象类的实例
class Factoy {
  constructor(username, pwd, role) {
    this.username = username;
    this.pwd = pwd;
    this.role = role;
  }
}

class CreateRoleFactory {
  static create(username, pwd, role) {
    return new Factoy(username, pwd, role);
  }
}
const admin = CreateRoleFactory.create('张三', '222', 'admin');
console.log(admin)
// 工厂方法  本意是将实际创建对象的工作推迟到子类中
class User {
  constructor(name, menuAction){
    if(new.target === User) throw Error('User 不能被实例化')
    this.name = name
    this.menuAction = menuAction
  }
}
class UserFactory extends User{
  constructor(...props){
    super(...props)
  }
  static create(role){
    const roleCollection = new Map([
      ['admin', () => new UserFactory('管理员', ['首页', '个人中心'])],
      ['user', () => new UserFactory('普通用户', ['首页'])]
    ])
    return roleCollection.get(role)()
  }
}
const admins = UserFactory.create('admin')
console.log('admin', admins)
const user = UserFactory.create('user');
console.log(user); // {name: "普通用户", menuAuth: Array(1)}


// 抽象工厂   随着业务形态的变化，一个用户可能在多个平台上同时存在，显然工厂方法也不再满足了，
// 这时候就要用到抽象工厂。抽象工厂模式是对类的工厂抽象用来创建产品类簇，不负责创建某一类产品的实例。

class User1 {
  constructor(hospital){
    if(new.target === User) throw Error('User 不能被实例化')
    this.hospital = hospital
  }
}
// 浙一
class ZheYiUser extends User1 {
  constructor(name, departmentsAuth) {
    super('zheyi_hospital');
    this.name = name;
    this.departmentsAuth = departmentsAuth;
  }
}
// 浙一
class QuWoUser extends User1 {
  constructor(name, departmentsAuth) {
    super('QuWo_hospital');
    this.name = name;
    this.departmentsAuth = departmentsAuth;
  }
}
const getAbstractUserFactory = (hospital) => {
  switch (hospital) {
    case 'zheyi_hospital':
      return ZheYiUser;
      break;
    case 'QuWo_hospital':
      return QuWoUser;
      break;
  }
}
const ZheYiUserClass = getAbstractUserFactory('zheyi_hospital');
const user1 = new ZheYiUserClass('王医生', ['外科', '骨科', '神经外科'])
console.log(user1)