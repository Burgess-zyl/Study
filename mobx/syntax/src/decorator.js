// Decorator 在声明阶段实现类与类成员注解的一种语法

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
                    console.log('before' + key)
                    const ret = func.apply(this, args)
                    console.log('after' + key)

                    return ret
                }
            })
        }
    }
}

@log
class Numberic {
    PI = 9.1415926

    add (...nums) {
        return nums.reduce((p, c) => (p + c), 0)
    }
}

new Numberic().add(1, 2)