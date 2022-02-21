
// Question 1
// Create a function called receivingFunction which accepts one argument. Inside this function check if the argument is a function, and if it is, call the function.

// Create another function called callbackFunction which logs the string: "I am a callback function".

// Call receivingFunction and pass callbackFunction into it as an argument.


// function receivingFunction(someArgumant) {
//     console.log("The argument is a " + typeof someArgumant);
//     someArgumant()
    
// }




// function callbackFunction() {
//     console.log("I am a callback function");
// }

// receivingFunction(callbackFunction);

function  receivingFunction (someArgumant) {
    console.log("The argument is a " + typeof someArgumant);
    
    
    if (typeof someArgumant === "function") {
        someArgumant()
    }
}

function callbackFunction() {
    console.log("I am a callback function");
}
receivingFunction(callbackFunction)


// Question 2
// Convert the following for loop to a forEach loop.

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function(item) {
    console.log(item);
});

// for (let i = 0; i < prizes.length; i++) {
//     console.log(`Prize ${i + 1}: ${prizes[i]}`);
// }




// Question 3
// Write code that waits 5 seconds before logging the string: I waited 5 seconds before executing. Store the amount of seconds (5 initially) in a variable so it can be easily changed.

// setTimeout(someFunction, 5000);
let time = 6000
setTimeout(function() {
    console.log("I waited 5 seconds before executing");
}, time);




// Question 4
// Write code that logs the numbers 1 to 4 every 1.5 seconds and then stops.

let interval = 1500
let num=0

const myInterval = setInterval(function() {
num+=1
if (num === 4) {
    clearInterval(myInterval)   
}
console.log(num);
}, interval);