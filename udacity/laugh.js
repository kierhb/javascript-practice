/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */


var laugh = function(laugh) {
    count = "";
    for (let x = 1; x <= laugh; x++) {
        count = count + "ha";
    }
    return count + "!";
}

console.log(laugh(10));
