let grade = prompt("Please enter grade: ", "");

switch (true) {
    // If grade is 90 or greater
    case grade >= 90:
        console.log("A");
        break;

    //If grade is 80 or greater
    case grade >= 80:
        console.log("B");
        break;
    
    //If grade is 70 or greater
    case grade >= 70:
        console.log("C");
        break;

    //If grade is 60 or greater
    case grade >= 60:
        console.log("D");
        break;
    
    //If grade is below 60
    default:
        console.log("E");
}