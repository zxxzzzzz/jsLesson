https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// 一个最基本得类
class MyO {
    constructor(){

    }
}

// 一个类继承
class MyArray extends Array{
    constructor(){
        super() //必须super后才能用this
        this.a = 1 //属性
    }
    //静态函数
    static te(){

    }
    //方法
    te2(){

    }
}
