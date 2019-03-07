"use strict";
var user = getUserName();
console.log('user name:', user);

alert('Hi there ' + user + ' I\'m going to ask you few questions.');
var correctanswers = 0;
var totalquestions = 0;
var Question1 = prompt(' My favorite color is yellow. Please answer yes/no Or y/n');
console.log('user answer1:', Question1);
totalquestions++;   
verifyAnswer(Question1,4);


var Question2 = prompt(' My favorite Car is Duster.Please answer yes/no Or y/n');
console.log('user answer2:', Question2);
totalquestions++;
verifyAnswer(Question2,3)

var Question3 = prompt(' My favorite Book is Peshwa.Please answer yes/no Or y/n');
console.log('user answer3:', Question3);
totalquestions++;
verifyAnswer(Question3,2)

var Question4 = prompt(' My favorite Cartoon character is Tom.Please answer yes/no Or y/n');
console.log('user answer4:', Question4);
totalquestions++;
verifyAnswer(Question4,1)

var Question5 = prompt(' My favorite sport is cricket.Please answer yes/no Or y/n');
console.log('user answer5:', Question5);
totalquestions++;
verifyAnswer(Question5,0)

if (parseInt(correctanswers) > 0) {
    alert('Hi ' + user + ' ! You have guessed ' + correctanswers + ' correctly out of ' + totalquestions  + ', ' + (correctanswers / totalquestions * 100) + ' % of your guesses are correct.');
}
else {
    alert('Hi ' + user + ' ! Sorry, none of your guesses are correct, try again');
}


var fav_num;
var numtimes = 1;

while (fav_num !== 44) {
    fav_num = parseInt(prompt('Can you guess my favorite number between 1 to 100?'));

    if (fav_num < 20) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed too low! You can double it up.');
        numtimes++;
    } else if (fav_num >= 20 && fav_num <= 43) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed low!');
        numtimes++;
    } else if (fav_num > 44 && fav_num < 70) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed high! But you are close enough.');
        numtimes++;
    } else if (fav_num >= 70 ) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed Too high!');
        numtimes++;
    } else if (isNaN(fav_num) || fav_num === null) {
        console.log('user answer6:', fav_num);
        alert('Please enter an actual number');
        numtimes++;
    }
}
alert('Total number of guesses: ' + numtimes + '.');
alert('Hi ' + user + ' It took ' + numtimes + ' guesses until you got it ');


var birds = ["eagle", "kingfisher", "peacock", "parrot", "woodpecker","swift"];
var chance = 1;
for (i = 0; i < birds.length; i++) {
    alert('This is your guess number ' + chance + '.');
    var fav_bird = prompt('What is one of my favorite birds?');
    console.log('user answer7:', fav_bird);
    if (birds.includes(fav_bird.toLowerCase())) {
        alert('Yes, it is right!!!! You got it corretc on the ' + chance + ' chance.');
        chance++;
        break;
    }
    else {
        alert('Incorrect guess - you are running out of chances. Think!!');
        chance++;
    }
}

console.log('question 8:', birds);
alert('Possible answers are ' + birds + '.');


/* Function declarations */
function getUserName() {
    var name = prompt("What's your name?")   
    while (name === null || name === "") {
        var name = prompt('Please enter your name');             
    }
    return name;
}

/* Check answer */
function verifyAnswer(Question, QuestionLeft) {
    if (Question != null && Question != '') {
        if (Question.toUpperCase() === 'Y' || Question.toUpperCase() === 'YES') {
            if (QuestionLeft = 0) {
                alert('You are correct. We are done with the questions. Let me provide more details about me in my profile');
            }
            else {
                alert('You are correct. Lets move on'|| QuestionLeft ||' more to go');
            }
            correctanswers++;
        }
        else if (Question.toUpperCase() === 'N' || Question.toUpperCase() === 'NO') {
            if (QuestionLeft = 0) {
                alert('You are wrong. Lets try another question, Let me provide more details about me in my profile');
            } else {
                alert('You are wrong. Lets try another question, we have '||QuestionLeft ||'more. All the best!!');
            }
        }
    }
    else {
        if (QuestionLeft = 0) {
            alert('Please answer only in yes/no Or y/n. Let me provide more details about me in my profile');
        } else {
            alert('Please answer only in yes/no Or y/n. All the best!!');
        }
    }
}