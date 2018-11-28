// 将变量转为可观察的对象
// observable作为函数
import { observable, isArrayLike, extendObservable } from 'mobx'

// array object map

const arr = observable(['a', 'b', 'c'])
console.log(arr, isArrayLike(arr), arr[1])

const obj = observable({a: 1, b: 2})
console.log(obj)
// mobx只能对已有属性进行监视 增加的需要使用extendObservable
extendObservable(obj, {c: 3})
console.log(obj)

const map = observable(new Map())
console.log(map)

// 对基础数据类型 使用 observable.box 包装为可被观察的对象

var num = observable.box(20)
var str = observable.box('hello')
var bool = observable.box(true)

console.log(num, str, bool)
console.log(num.get(), str.get(), bool.get())
num.set(50) 
console.log(num)

// observable作为装饰器 可观察对象
class Store {
    @observable arr = []
    @observable obj = {}
    @observable map = new Map()

    @observable str = 'hi'
    @observable num = 10
    @observable bool = false
}