//Declare two variables
//Assign number to them;
//write a conditional statement that randomly picks a number betwwen 0 and the first variable and add it to the 
//and the second variable. check if the output is even or odd


let variable1 = 10
let variable2 = 20
let randomNumber1 = Math.floor(Math.random() * variable1);
let randomNumber2 = Math.floor(Math.random() * variable2);
let sum = randomNumber1 + randomNumber2;


if(sum % 2 === 0){
    //strict 
    console.log("The sum ${sum} is even")
}else{
    console.log("The sum ${sum} is odd")
}
//NOTE: the % sign means modulus thats remainder
// thats in calculation modulus is that remainder when you divide either an even number with an odd number or the other way round.

//the $ sign is used to insert the value of the name variable into a string.
//The $ sign is used to insert the value of the sum variable into the string
// This is called STRING INTERPOLATION< and it's a conenient way to insert values into strings
// without having to use CONCATENATION.
// The ${} synatax is called a placeholder, and it's replaced with the actual value of the variable when the string is evaluated. 


