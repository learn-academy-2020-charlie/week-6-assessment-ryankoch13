// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// I wanted to challenge myself to write one line solutions for this assessment, so here goes. I declared a function that takes in an array as an argument. 
const findOut = (array) => {

// I tried to tackle this problem a little differently than I normally did so the first thing I did was write my console.log statement below and write the function return. That way, I could see what my result is after each method and add another method after that to eventually get to the expected output. 

// First thing I did was create the map function. At this point I'm getting each object individually so I specify .name. Now I'm getting a string with two words and I need to capitalize each first letter so I split it into an array. Next I do my toUpperCase + substring method to get each word capitalized. Then I do my .join method to get them back into one string. Then I wrote my concat method to append the occupation into a sentence. I used string interpolation to write my sentence and topped it off with a .join because I noticed the example output was a series of strings and I was getting an array of strings. 

  return array.map(value => value.name.split(" ").map(value => value[0].toUpperCase() + value.substring(1)).join(" ").concat(` is the best ${ value.occupation } ever!`)).join(" ")
}

console.log(findOut(people))

// I know the output isn't exactly what you're looking for, but pretty close at least, right? 

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//This one wasn't too bad, it's a problem we've solved before so I decided to get more practice with the above workflow. 

const numsDivThree = (array) => {
// Again, I wrote my return and console.log first so I can see what my function is doing each step. I struggled with the filter function not liking 0 because it evaluates to false as well at first, but eventually I got it to work by chaining a map after a filter instead of trying to apply the logic of both of them at once. First I filtered out only numbers, then I used a map to return the modulo 3. 
  return array.filter(value => typeof value == "number").map(value => value % 3)
}

console.log(numsDivThree(testingArray1))
console.log(numsDivThree(testingArray2))


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

// Same thing as above. I felt comfortable with the problem and solution so I tried to write it as efficiently as possible. I added in the spread operator after the fact because the first time we had to solve this problem in an asssessment we were asked to try and use it, and I wanted to see if I remember how to do it. 

const noDupes = (...arrs) => {
  // I'm trying to use more shortened variable names in my HO functions, especially the ones that take a bunch of arguments. It's getting clunky writing out array value index everytime, especially if the whole line of code is only like 15 characters long. I remembered using the trick of a filter method to identify unique values from the last time and I really like it. 
  return [].concat(...arrs).filter((v, i, a) => i == a.indexOf(v))
}

console.log(noDupes(testingArray3, testingArray4))