// node作用域  子函数作用域->父函数作用域->父函数的父的作用域->...->模块内的global作用域->内置全局作用域
// window作用域  子函数作用域->父函数作用域->父函数的父的作用域->...->window

function test() {
    let a = 1
    function test2() {
        console.log(a)
        a = 2
    }
    test2()
    console.log(a)
}
test()

// 闭包 子函数用父函数变量就是闭包
function test3(params) {
    let a = 1
    function test2() {
        a = 2
    }
    test2()
    return a
}
console.log(test3())

// 闭包的利用
// 1.上古时代的局部全局变量
!function(){
    // 这样不会污染window
    let a = 1
    let b = 1
    let c = 1
    function aaa(){

    }
}()
// 2.数据存储 能做一些检索优化，或者某些数据想变成私有得
function a(){
    let a = 1
    // a被存了下来
    return () => {a+=1;console.log(a)}
}
let dc = a()
console.log(dc(),dc(),dc())
