// computed autorun when reaction
import { observable, computed, autorun, when, reaction, action, runInAction } from 'mobx'

class Store {
    @observable arr = []
    @observable obj = {}
    @observable map = new Map()

    @observable str = 'hi'
    @observable num = 10
    @observable bool = false

    @computed get mixed() {
        return store.str + '/' + store.num
    }
    @action.bound bar () {
        this.str ='action'
        this.num = 55
    }
}

// computed 作为函数 或者作为装饰器 可引用普通可观察数据也可嵌套引用 但不可循环引用
// 可将多个可观察数据组合为一个可观察数据
var store = new Store()
var foo = computed(function () {
    return store.str + '/' + store.num
})
foo.observe(function (change) {
    console.log('change' + change)
})
console.log(foo, foo.get(), store.mixed)

store.str = 'hello'

// autorun 引用可观察数据被修改后 自动执行可依赖观察数据的行为（传入autorun的函数）
// 能自动追踪所引用的可观察数据 并在数据改动后重新触发
autorun(() => {
    console.log(store.str + '?' + store.num)
    // console.log(store.mixed)
})

store.str = 'autorun'
store.num = 20

// when 接受两个函数类型参数 第一个函数根据可观察数据返回布尔值， 为true的时候执行第二个函数
// 条件执行逻辑
when(() => store.bool, () => console.log('it is true'))
store.bool = true

// reaction 接受两个函数类型参数 不必执行副作用 对比autorun
reaction(() => [store.str, store.num], arr => console.log(arr.join('!!!')))
// store.str = 'reaction'
// store.num = 33

// action 任何修改状态赋值的行为 可将多次赋值合并为一次

// store.bar()

// action.bound 上下文
var bar = store.bar
bar()

runInAction('modify', () => {
    store.str = 'runination'
    store.num = 898
})