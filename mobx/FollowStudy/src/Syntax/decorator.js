// Decorator 装饰器 包装对象返回一个新对象，依赖于Object.defineProperty
// 在编译阶段非执行时  使用方法 在被需要装饰的前面 加 @方法名 
// 在提议阶段 需要使用babel插件  babel-plugin-transform-decorators-legacy
// 可装饰 类 类的属性和方法(类成员)
/**
 * 作用在 类的属性和方法 三个参数
 * function decorator (target, key, descriptor) {
 *      // target 类的原型（decorator.prototype）
 *      // key 被装饰的 类的属性/方法
 *      // 属性描述符
 * }
 * 
 * 作用在 类 只有一个参数
 * function decorator (target) {
 *      target 类本身
 * }
 * 
 * 
 */
/*
 *  Object.defineProperty(obj, prop, descriptor) 为一个对象增加新属性或修改已存在的属性
 *  obj：要在其上定义属性的对象。
 *  prop：要定义或修改的属性的名称。
 *  descriptor：将被定义或修改的属性描述符，是个对象。
 */
function log (target) {
    const desc = Object.getOwnPropertyDescriptors(target.prototype)

    for (const key of Object.keys(desc)) {
        if (key === 'constructor') {
            continue
        }
        const func = desc[key].value
        if ('function' === typeof func) {
            Object.defineProperty(target.prototype, key, {
                value (...args) {
                    console.log('before ' + key)
                    const ret = func.apply(this, args)
                    console.log('after ' + key)
                    return ret
                }
            })
        }
    }
}

function readonly (target, key, descriptor) {
    descriptor.writable = false
}

function validate (target, key, descriptor) {
    const value = descriptor.value
    descriptor.value = function (...args) {
        for (let num of args) {
            if ('number' !== typeof num) {
                throw new Error(`"${num} is not a number"`)
            }
        }
        return value.apply(this, args)
    }
}

@log
class Numberic {
    @readonly PI = 3.1415926

    @validate
    add (...nums) {
        return nums.reduce((p, c) => (p + c), 0)
    }
}

console.log(new Numberic().add(1, 2))
// new Numberic().PI = '?'
// new Numberic().add('?')

function demoProperty (target, key, descriptor) {
    console.log('类的属性 装饰器')
    console.log(target)
    console.log(key)
    console.log(descriptor)
}

function demoMethod (target, key, descriptor) {
    console.log('类的方法 装饰器')
    console.log(target)
    console.log(key)
    console.log(descriptor)
}
function demoClass (target) {
    console.log('类 装饰器')
    console.log(typeof target)
    console.log(target.prototype)
    const desc = Object.getOwnPropertyDescriptors(target.prototype)
    console.log(desc)
}
@demoClass
class say {
    @demoProperty
    name = 'sayFn'
    @demoMethod
    fn (context) {
        console.log(context)
    }
}
console.log(new say().fn('hi'))