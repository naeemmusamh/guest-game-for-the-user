'use strict';

let inputUser = prompt('what is your name??');
alert(`welcome in my page ${inputUser}`);
let questions = ['lets guass the correct number between 0-15?', 'what you think is my phone?'];
let possibleResponses = ['iphone', 'samsung', 'huawei', 'vivo'];
let correctResponses = ['iphone', 'vivo'];


let correctAnswers = 0;
//Q1
let inputUniv = prompt('Question 1: ' + 'you studied in Yarmouk university or not??');
if (inputUniv.toLowerCase() === 'yes' || inputUniv.toLowerCase() === 'y') {
    alert('yeahhh me too');
    correctAnswers++;
} else if (inputUniv.toLowerCase() === 'no' || inputUniv.toLowerCase() === 'n') {
    alert('no way, i dont like it');
} else {
    alert('any way welcome');
}
document.getElementById("score").innerHTML = correctAnswers;
//Q2
let inputFriend = prompt('Question 2: ' + 'you have a good time in university or not???');
if (inputFriend.toLowerCase() === 'yes' || inputFriend.toLowerCase() === 'y') {
    alert('yeahhh me too');
    correctAnswers++;
} else if (inputFriend.toLowerCase() === 'no' || inputFriend.toLowerCase() === 'n') {
    alert('no way, i dont like it');
} else {
    alert('any way welcome');
}
document.getElementById("score").innerHTML = correctAnswers;

//Q3
let inputWork = prompt('Question 3: ' + 'have you work for any company in irbid???');
if (inputWork.toLowerCase() === 'yes' || inputWork.toLowerCase() === 'y') {
    alert('yeahhh me too');
    correctAnswers++;
} else if (inputWork.toLowerCase() === 'no' || inputWork.toLowerCase() === 'n') {
    alert('no way, i dont like it');
} else {
    alert('any way welcome');
}
document.getElementById("score").innerHTML = correctAnswers;

//Q4
let inputYear = prompt('Question 4: ' + 'have you work for more than 5 year in comapy???');
if (inputYear.toLowerCase() === 'yes' || inputYear.toLowerCase() === 'y') {
    alert('yeahhh me too');
    correctAnswers++;
} else if (inputYear.toLowerCase() === 'no' || inputYear.toLowerCase() === 'n') {
    alert('no way, i dont like it');
} else {
    alert('any way welcome');
}
document.getElementById("score").innerHTML = correctAnswers;

//Q5
let inputWere = prompt('Question 5: ' + 'have you been visit LTUC???');
if (inputWere.toLowerCase() === 'yes' || inputWere.toLowerCase() === 'y') {
    alert('yeahhh me too');
    correctAnswers++;
} else if (inputWere.toLowerCase() === 'no' || inputWere.toLowerCase() === 'n') {
    alert('no way, i dont like it');
} else {
    alert('any way welcome');
}
document.getElementById("score").innerHTML = correctAnswers;
//Q6
for (let i = 0; i < 4; i++) {
    let answerer1 = prompt('Question 6: ' + 'What do you expect how old I am?');
    if (answerer1.toLowerCase() === '28') {
        alert('correct');
        correctAnswers++;
        break;
    } else {
        alert('no,uncorrected');
    }
}
//debugger
document.getElementById("score").innerHTML = correctAnswers;
alert('the correct answer is a 28 year');


// Q7
for (let x = 0; x < 6; x++) {
    let answerer2 = prompt('Question 7: ' + 'What do you expect that I would like to eat, be aware that I am Jordanian?');
    if (answerer2.toLowerCase() === 'mansf') {
        alert('correct');
        correctAnswers++;
        break;
    } else {
        alert('no,uncorrected');
    }
}
document.getElementById("score").innerHTML = correctAnswers;
alert('the correct answer is a mansf');
//Q8
function questionNumSix() {
    for (let i = 0; i < 4; i++) {
        let answerer3 = prompt('Question 8: ' + questions[0]);
        if (parseInt(answerer3) === 9) {
            alert('correct answer');
            correctAnswers++;
            break;
        } else if (parseInt(answerer3) > 9) {
            alert('too high try a gain');
        } else {
            alert('too low try a gain')
        }
    }
    alert('the correct answer is 9');
    return correctAnswers;
}
document.getElementById("score").innerHTML = questionNumSix();



//Q9
// let gauss = ['iphone', 'samsung', 'huawei', 'vivo'];

function questionNumSeven() {
    let flag = false;
    let answer;
    for (let i = 0; i < 6; i++) {
        answer = prompt('Question 9: ' + questions[1]);
        for (let k = 0; k < possibleResponses.length; k++) {
            if (answer === possibleResponses[k]) {
                if (answer === correctResponses[0] || answer === correctResponses[1]) {
                    flag = true
                    correctAnswers++;
                    alert('correct')
                        //console.log(flag)
                    break
                } else {
                    alert('possible but not correct')
                    answer = prompt("what is my phone");
                }
            }
        }
        if (flag)
            break
    }
    return correctAnswers;
}
document.getElementById("score").innerHTML = questionNumSeven();
alert(`the correct answer is: ${correctResponses}`);

alert(`welcome in my page ${inputUser}` + 'a gain');