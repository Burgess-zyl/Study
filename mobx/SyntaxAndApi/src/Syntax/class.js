function Animal () {}
function Dog () {}

// Dog instance of Animal => true
// 要实现 dog.__proto__.__proto__... === Animal.prototype
// 需 dog.__proto__ === Dog.prototype
//    Dog.prototype.__proto === Animal.prototype

Object.defineProperties(Animal.prototype, {
    name: {
        value () {
            return 'Animal'
        }
    },
    say: {
        value () {
            return `I'm ${this.name()}`
        }
    }
})

Dog.prototype = Object.create(Animal.prototype)
// 多态实现 constructor 指向 构造函数本身
Dog.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Dog,
        enumerable: false
    },
    name: {
        value () {
            return 'Dog'
        }
    }
})

// document.write(new Dog().say())
// document.write('<br/>')
// document.write(Dog.prototype.constructor)

// class实现继承
class Animal1 {
    name () {
        return 'Animal'
    }
    say () {
        return `I'm ${this.name()}`
    }
}

class Dog1 extends Animal1 {
    foot = 'bone'
    name () {
        return 'Dog'
    }
}

console.log(new Dog1() instanceof Animal1)