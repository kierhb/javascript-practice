//! Prototype

function Person(fName, lName) {
    this.firstName = fName
    this.lastName = lName
}

//const person1 = new Person("Rimuru", "Tempest")
//const person2 = new Person("Veldora", "Tempest")

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName
}

//console.log(person1.getFullName())
//console.log(person2.getFullName())

//? Prototypal inheritance

function TrueDragon(fName, lName) {
    Person.call(this, fName, lName)
    this.isTrueDragon = true
}

TrueDragon.prototype.fightWar = function() {
    console.log("Fighting on War")
}

TrueDragon.prototype = Object.create(Person.prototype)

const king = new TrueDragon("Rimuru", "Tempest")
TrueDragon.prototype.constructor = TrueDragon
console.log(king.getFullName())