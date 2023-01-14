function normalFunction() {
    console.log("Normal")
    console.log("Function")
}

normalFunction()

function* generatorFunction() {
    yield "Generator"
    yield "Function"
}

const generatorObject = generatorFunction()
for (const word of generatorObject) {
    console.log(word)
}