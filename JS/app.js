'use strict';

let inputUser = prompt('what is your name??');
alert(`welcome in my page ${inputUser}`);
let questions = ['you studied in Yarmouk university or not??', 'you have a good time in university or not???', 'have you work for any company in irbid???', 'have you work for more than 5 year in company???', 'have you been visit LTUC???', 'What do you expect how old I am?', 'What do you expect that I would like to eat, be aware that I am Jordanian?', 'lets gauss the correct number between 0-15?', 'what you think is my phone?'];
let possibleResponses = ['iphone', 'samsung', 'huawei', 'vivo'];
let correctResponses = ['iphone', 'vivo'];
let correct = ['yes', 'y'];
let uncorrected = ['no', 'n'];
let correctAnswers = 0;


//Q1
function questionNumOne() {
    let inputUniv = prompt('Question 1: ' + questions[0]);
    if (inputUniv.toLowerCase() === correct[0] || inputUniv.toLowerCase() === correct[1]) {
        alert('yeahhh me too');
        correctAnswers++;
    } else if (inputUniv.toLowerCase() === uncorrected[0] || inputUniv.toLowerCase() === uncorrected[1]) {
        alert('no way, i dont like it');
    } else {
        alert('any way welcome');
    }
    return correctAnswers;
}
document.getElementById("score").innerHTML = questionNumOne();


//Q2
function questionNumTwo() {
    let inputFriend = prompt('Question 2: ' + questions[1]);
    if (inputFriend.toLowerCase() === correct[0] || inputFriend.toLowerCase() === correct[1]) {
        alert('yeahhh me too');
        correctAnswers++;
    } else if (inputFriend.toLowerCase() === uncorrected[0] || inputFriend.toLowerCase() === uncorrected[1]) {
        alert('no way, i dont like it');
    } else {
        alert('any way welcome');
    }
    return correctAnswers;
}
document.getElementById("score").innerHTML = questionNumTwo();


//Q3
function questionNumThree() {
    let inputWork = prompt('Question 3: ' + questions[2]);
    if (inputWork.toLowerCase() === correct[0] || inputWork.toLowerCase() === correct[1]) {
        alert('yeahhh me too');
        correctAnswers++;
    } else if (inputWork.toLowerCase() === uncorrected[0] || inputWork.toLowerCase() === uncorrected[1]) {
        alert('no way, i dont like it');
    } else {
        alert('any way welcome');
    }
    return correctAnswers;
}
document.getElementById("score").innerHTML = questionNumThree();

//Q4
function questionNumFour() {
    let inputYear = prompt('Question 4: ' + questions[3]);
    if (inputYear.toLowerCase() === correct[0] || inputYear.toLowerCase() === correct[1]) {
        alert('yeahhh me too');
        correctAnswers++;
    } else if (inputYear.toLowerCase() === uncorrected[0] || inputYear.toLowerCase() === uncorrected[1]) {
        alert('no way, i dont like it');
    } else {
        alert('any way welcome');
    }
    return correctAnswers;
}
document.getElementById("score").innerHTML = questionNumFour();


//Q5
function questionNumFive() {

    let inputWere = prompt('Question 5: ' + questions[4]);
    if (inputWere.toLowerCase() === correct[0] || inputWere.toLowerCase() === correct[1]) {
        alert('yeahhh me too');
        correctAnswers++;
    } else if (inputWere.toLowerCase() === uncorrected[0] || inputWere.toLowerCase() === uncorrected[1]) {
        alert('no way, i dont like it');
    } else {
        alert('any way welcome');
    }
    return correctAnswers;
}
document.getElementById("score").innerHTML = questionNumFive();


//Q6
function questionNumSex() {
    for (let i = 0; i < 4; i++) {
        let answerer1 = prompt('Question 6: ' + questions[5]);
        if (answerer1.toLowerCase() === '28') {
            alert('correct');
            correctAnswers++;
            break;
        } else {
            alert('no,uncorrected');
        }
    }
    return correctAnswers;
    alert('the correct answer is a 28 year');
}
//debugger
document.getElementById("score").innerHTML = questionNumSex();


// Q7
function questionNumSeven() {
    for (let x = 0; x < 6; x++) {
        let answerer2 = prompt('Question 7: ' + questions[6]);
        if (answerer2.toLowerCase() === 'mansf') {
            alert('correct');
            correctAnswers++;
            break;
        } else {
            alert('no,uncorrected');
        }
    }
    alert('the correct answer is a mansf');
    return correctAnswers;
}
document.getElementById("score").innerHTML = questionNumSeven();


//Q8
function questionNumEight() {
    for (let i = 0; i < 4; i++) {
        let answerer3 = prompt('Question 8: ' + questions[7]);
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
document.getElementById("score").innerHTML = questionNumEight();



//Q9
// let gauss = ['iphone', 'samsung', 'huawei', 'vivo'];

function questionNumNine() {
    let flag = false;
    let answer;
    for (let i = 0; i < 6; i++) {
        answer = prompt('Question 9: ' + questions[8]);
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
    alert(`the correct answer is: ${correctResponses}`);
}
document.getElementById("score").innerHTML = questionNumNine();

alert(`welcome in my page ${inputUser}` + 'a gain');