// Exercise 1: Counting to 10
// Use a while loop to print all numbers from 1 to 10
let a = 0
while (a < 11) {
	console.log(a)
	a++
}
// Exercise 2: Even numbers
// Use a while loop to print all the even numbers from 20 to 40
let b = 20
while (b < 41) {
	console.log(b)
	b = b + 2
}

// Exercise 3: Countdown
// Ask the user to enter a positive integer (remember to cast!) Use a while loop to print from that number down to 1

let user = prompt("Enter a positive number")
user2 = parseInt(user)
while (user > 0) {
	console.log(user)
	user--
}



// Exercise 4: Sum of N Numbers
// Prompt the user to enter a positive integer. Calculate the sum of all numbers from 1 to that number using a while loop and display the result.

let sum = 0
let counter = 1

let sumOfNum = prompt("Enter a postive integer")
parseInt()

while (sumOfNum => counter) {
	console.log(sumOfNum)
	sum = sum + counter
	counter++
}if(sumOfNum <= counter){
	console.log("Sum of all nums equals", sumOfNum )
}

//(This is what i orginally put but i deleted it since i got no results)



// Exercise 5: Password Entry
// Create a simple password entry program. Ask the user to enter a password. Use a while loop to keep prompting the user until they enter the correct password (e.g., "secret").

let password = "cat"
let passGuess = prompt("Enter password")

while (passGuess !== password) {
	guesses = prompt("Guess again")
}if(passGuess == password){
	console.log("Nice")
}






// Extra Credit: Password Strength Checker
// Create a password strength checker with a while loop. Continuously prompt the user to enter a password until it meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one special character (e.g., @, #, $, etc.)
// Display a message when a valid password is entered.
// Hint: start by doing the conditions one by one and then combine them after




