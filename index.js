/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 20;

if(votingAge > 18) {
    console.log("True");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let type = "Human";
const legsCount = 4;

if(legsCount > 2) {
    type = "Dog";
}

console.log(type);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let string1999 = "1999";
let number1999 = parseInt(string1999, 10);
console.log(number1999);

//Task d: Write a function to multiply a*b 
function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 7));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(humanAge) {
    return humanAge * 7;
}

console.log(dogYears(30));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(weightLbs, ageYears) {
    if(ageYears >= 1) {
        if(weightLbs < 6) {
            return weightLbs * 0.05;
        } else if(weightLbs < 11) {
            return weightLbs * 0.04;
        } else if(weightLbs < 16) {
            return weightLbs * 0.03;
        } else {
            return weightLbs * 0.02;
        }
    } else {
        if(ageYears <= 0.333333) {
            return weightLbs * 0.1;
        } else if (ageYears <= 0.583333) {
            return weightLbs * 0.05;
        } else {
            return weightLbs * 0.04;
        }
    }
}
console.log(dogFeeder(15, 1));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function rockPaperScissors(userSelection) {
    let computerChoice = Math.floor(Math.random() * 3);
    let computerString;
    let userChoice;
    // Set The Computers Choice As The Appropriate String For Later Output
    if(computerChoice === 0) {
        computerString = "rock";
    } else if(computerChoice === 1) {
        computerString = "paper";
    } else {
        computerString = "scissors";
    }

    // Convert the users choice from a string to a number for calculation
    if(userSelection.toLowerCase() === "rock") {
        userChoice = 0;
    } else if (userSelection.toLowerCase() === "paper") {
        userChoice = 1;
    } else if (userSelection.toLowerCase() === "scissors") {
        userChoice = 2;
    } else {
        return "You must select rock, paper or scissors"
    }

    // Determine who is the winner
    if(userChoice === computerChoice) {
        return `It's a tie! You Both Played ${computerString}.`;
    } else if (userChoice === 0) {
        if(computerChoice === 1) {
            return `You Lose. The Computer played ${computerString}.`;
        } else {
            return `You Win! The Computer played ${computerString}.`
        }
    } else if (userChoice === 1) {
        if(computerChoice === 0) {
            return `You Win! The Computer played ${computerString}.`;
        } else {
            return `You Lose. The Computer played ${computerString}.`;
        }
    } else {
        if(computerChoice === 0) {
            return `You Lose. The Computer played ${computerString}.`;
        } else {
            return `You Win! The Computer played ${computerString}.`;
        }
    }
}

console.log(rockPaperScissors('rock'));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function converToMiles(kilometers) {
    return kilometers * 0.62137;
}

console.log(converToMiles(200));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCentimeters(feet) {
    return  feet * 30.48;
}
console.log(feetToCentimeters(24));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(startingNumber) {
    for(let i = startingNumber; i > 0; i--) {
        console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`);
    }
}
annoyingSong(10);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function calculateGrade(grade) {
    if(grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F";
    }
} 

console.log(calculateGrade(87));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function findVowelCount(string) {
    let lowercase = string.toLowerCase();
    let toArray = lowercase.split("");
    let count = 0;
    for(let i = 0; i < toArray.length; i++) {
        if(toArray[i] === 'a' || toArray[i] === 'e' || toArray[i] === 'i' || toArray[i] === 'o' || toArray[i] === 'u') {
            count++;
        }
    }
    return count;
}

console.log(findVowelCount("lets do this!"));



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

const startGame = document.getElementById("runGame");
startGame.addEventListener('click', function() {
    const userChoice = document.getElementById("rockPaperScissors").value;
    const message = document.getElementById('gameResults');
    message.textContent = rockPaperScissors(userChoice);
});