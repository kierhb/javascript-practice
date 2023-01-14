class Person {
    constructor(fName, lName) {
        this.firstName = fName
        this.lastName = lName
    }

    sayMyName() {
        return this.firstName + " " + this.lastName
    }
}

const classP1 = new Person("Shouyo", "Hinata")

console.log(classP1.sayMyName())

class TrueDragon extends Person {
    constructor(fName, lName) {
        super(fName, lName)
        this.isTrueDragon = true
    }

    fightWar() {
        console.log("Fighting on War")
    }
}

const king1 = new TrueDragon("Rimuru", "Tempest")

console.log(king1.sayMyName())