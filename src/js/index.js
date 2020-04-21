import '../style/index.css'

class Person {
    constructor(options) {
        this.name = options.name
        this.age = options.age
    }
    Eat() {
        console.log('EatFun', this.name, this.age);
    }
}

const newPerson = new Person({
    name: 'ganping',
    age: 23
})
newPerson.Eat()