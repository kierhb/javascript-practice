//! First Rule - Implicit binding
const person = {
    name: "Rimuru",
    sayMyName: function() {
        console.log(`My name is ${this.name}`)
    }
}

person.sayMyName()

//! Second Rule - Explicit binding
function sayMyName() {
    console.log(`My name is ${this.name}`)
}

sayMyName.call(person)

//! Third Rule - New binding
function Person(name) {
    //this is an empty object
    this.name = name
}

const p1 = new Person("Veldora")
const p2 = new Person("Tempest")

console.log(p1.name, p2.name)
 
//! Fourth Rule - Default binding
globalThis.name = "Rimuru!"
sayMyName.call()