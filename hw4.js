//Exercise 1:
console.log("Exercise 1:");
var thisIsNewVariable = 10; //variable name was not declared in camelCase
if(thisIsNewVariable === 10) { //used strict equality operator 
    console.log("variable is equal to 10");
}

//Exercise 2:
console.log("\nExercise 2:");
let greetingMessage = `Hello, World!`; //used backticks for template string
let someNumber= 23.5; //used float number
let isTrue = true; //used boolean variable

console.log(greetingMessage);
console.log(someNumber);
console.log(isTrue);


//Exercise 3:
console.log("\nExercise 3:");
let currectScore = 95; // Stores the current score of the team

//Exercise 4:
console.log("\nExercise 4:");
console.log("'100' == 100:", '100' == 100); // true, because of type coercion
console.log("'100' === 100:", '100' === 100); // false, because types are different

//Exercise 5:
console.log("\nExercise 5:");
let isWeekend = false;
let schedule;
schedule = isWeekend ? "Day off!" : "Work day!";
console.log("Schedule: ", schedule);

//Exercise 6:
console.log("\nExercise 6:");
let userAge = 16;
if(userAge >= 18){
    console.log("Access granted.");
}
else{
    console.log("Access denied.");
}

//Exercise 7:
console.log("\nExercise 7:");
let hasPermission = true;
let itemCount = 3;
if(hasPermission && itemCount < 5){
    console.log("Ready to process.");
}

//Exersice 8:
console.log("\nExercise 8:");
for(let i = 1; i <= 5; i++){
    console.log("Iteration number: ", i);
}

//Exercise 9:
console.log("\nExercise 9:");
for (let i = 1; i <= 9; i++){
    if(i === 7){
        console.log("Iteration number reached ", i);
        break;
    }
    console.log("Iteration number: ", i);
}

//Exercise 10:
console.log("\nExercise 10:");
let counter = 10;
do{
    console.log("Running once.");
}while (counter < 5);

//Exercise 11:
function calculateArea(width, height){
    return width * height;
}
console.log("\nExercise 11:");
let resultArea = calculateArea(5, 10);
console.log("Area: ", resultArea);

//Exercise 12:
console.log("\nExersice 12:");
let fruitList = ['Apple', 'Banana'];
console.log("Fruits: ", fruitList);

fruitList.push('Grape'); //Added to the end
console.log("1.", fruitList);

fruitList.shift(); //Removed from the beginning
console.log("2.", fruitList);

let bananaIndex = fruitList.indexOf('Banana');
console.log("3. Index of Banana: ", bananaIndex);

//Exercise 13:
console.log("\nExercise 13:");
let originalData = [1, 2, 3, {name: 'test'}, [4, 5]];
let clonedData = originalData.slice(); // Shallow copy using slice
console.log("Original Data: ", originalData);
console.log("Cloned Data: ", clonedData);

//Slice creates a shallow copy, it copies the array structure but not nested objects/arrays.
//Changes to primitive values in clone won't affect original, but changes to nested objects will affect both.

//Exercise 14:
console.log("\nExercise 14:");
function Animal(species, sound){
    this.species = species;
    this.sound = sound;
}

//Exercise 15:
console.log("\nExercise 15:");
let dog = new Animal('Canine', 'Woof');
let cat = new Animal('Feline', 'Meow');
let animalArray = [dog, cat];

console.log("Animals: ", animalArray);
console.log("Dog species: ", dog.species);
console.log("Cat sound: ", cat.sound);