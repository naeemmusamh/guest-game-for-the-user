'use strict';

let inputUser = prompt('what is your name??');
alert(`welcome in my page ${inputUser}`);
let questions = ['lets guass the correct number between 0-15?', 'what you think is my phone?'];
let possibleResponses = ['samsung', 'iphone', 'huawei', 'vivo'];
let correctResponses = ['iphone', 'vivo'];


let correctAnswers = 0;
//Q1
let inputUniv = prompt('you studied in Yarmouk university or not??');
if (inputUniv.toLowerCase() === 'yes' || inputUniv.toLowerCase() === 'Y') {
  alert('yeahhh me too');
  correctAnswers++;
} else if (inputUniv.toLowerCase() === 'no' || inputUniv.toLowerCase() === 'n') {
  alert('no way, i dont like it');
} else {
  alert('any way welcome');
}
document.getElementById('score').innerHTML = correctAnswers;
//Q2
let inputFriend = prompt('you have a good time in university or not???');
if (inputFriend.toLowerCase() === 'yes' || inputFriend.toLowerCase() === 'y') {
  alert('yeahhh me too');
  correctAnswers++;
} else if (inputFriend.toLowerCase() === 'no' || inputFriend.toLowerCase() === 'n') {
  alert('no way, i dont like it');
} else {
  alert('any way welcome');
}
document.getElementById('score').innerHTML = correctAnswers;

//Q3
let inputWork = prompt('have you work for any company in irbid???');
if (inputWork.toLowerCase() === 'yes' || inputWork.toLowerCase() === 'y') {
  alert('yeahhh me too');
  correctAnswers++;
} else if (inputWork.toLowerCase() === 'no' || inputWork.toLowerCase() === 'n') {
  alert('no way, i dont like it');
} else {
  alert('any way welcome');
}
document.getElementById('score').innerHTML = correctAnswers;

//Q4
let inputYear = prompt('have you work for more than 5 year in comapy???');
if (inputYear.toLowerCase() === 'yes' || inputYear.toLowerCase() === 'y') {
  alert('yeahhh me too');
  correctAnswers++;
} else if (inputYear.toLowerCase() === 'no' || inputYear.toLowerCase() === 'n') {
  alert('no way, i dont like it');
} else {
  alert('any way welcome');
}
document.getElementById('score').innerHTML = correctAnswers;

//Q5
let inputWere = prompt('have you been visit LTUC???');
if (inputWere.toLowerCase() === 'yes' || inputWere.toLowerCase() === 'y') {
  alert('yeahhh me too');
  correctAnswers++;
} else if (inputWere.toLowerCase() === 'no' || inputWere.toLowerCase() === 'n') {
  alert('no way, i dont like it');
} else {
  alert('any way welcome');
}
document.getElementById('score').innerHTML = correctAnswers;

for (let i = 0; i < 4; i++) {
  let answerer1 = prompt('What do you expect how old I am?');
  if (answerer1.toLowerCase() === '28') {
    alert('correct');
    correctAnswers++;
    break;
  } else {
    alert('no,uncorrected');
  }
}
//debugger
document.getElementById('score').innerHTML = correctAnswers;
alert('the correct answer is a 28 year');



for (let x = 0; x < 6; x++) {
  let answerer2 = prompt('What do you expect that I would like to eat, be aware that I am Jordanian?');
  if (answerer2.toLowerCase() === 'mansf') {
    alert('correct');
    correctAnswers++;
    break;
  } else {
    alert('no,uncorrected');
  }
}
document.getElementById('score').innerHTML = correctAnswers;
alert('the correct answer is a mansf');
//Q6
function questionNumSix(){
  for (let i = 0; i < 4; i++) {
    let answerer3 = prompt('Question 6: ' + questions[0]);
    if (parseInt(answerer3) === 9) {
      alert('correct answer');
      correctAnswers++;
      break;
    } else if (parseInt(answerer3) > 9) {
      alert('too high try a gain');
    } else {
      alert('too low try a gain');
    }
  }
  alert('the correct answer is 9');
  return correctAnswers;
}
document.getElementById('score').innerHTML = questionNumSix();




//Q7
// let flag = false;
//let gauss = ['iphone', 'samsung', 'huawei', 'vivo'];
// function questionNumSeven(){
//   for (let z = 0; z < 6; z++){
//     let answerer4 = prompt('Question 7: ' + questions[1]);
//     for (let r=0;r<possibleResponses.length;r++) {
//       if(answerer4.toLowerCase()===possibleResponses[r]){
//         if(possibleResponses[r]===correctResponses[0] || possibleResponses[r]===correctResponses[1]){
//           alert('Correct');
//           flag = true;
//           correctAnswers++;
//           break;
//         }else{
//           alert('Incorrect');
//         }

//       }else{
//         alert('Please enter values from the list only ( ' + possibleResponses + ' )');
//       }

//     }
//     if(flag){
//       break;
//     }
//   }
//   return correctAnswers;
// }
function questionNumSeven(){
  let possibleFlag =false;
  let correctFlag =false;
  let notPossibleflag=false;
  for(let i=0;i<6;i++){
    let userInput=prompt('Question 7:' + questions[1]);
    for(let j=0;j<possibleResponses.length;j++){
    //   possibleFlag=false;
      notPossibleflag=false;
      if(userInput===possibleResponses[j]){
        possibleFlag=true;
        if(possibleResponses[j]===correctResponses[0] || possibleResponses[j]===correctResponses[1]){
          correctFlag=true;
          alert('Correct');
          break;
        }
      }else{
        notPossibleflag=true;
        possibleFlag=false;
      }

    }
    if(correctFlag){
      break;
    }else if(possibleFlag){
      alert('Incorrect Answer');
    }else if(notPossibleflag) {
      alert('Your input is not from the possible responses');
    }
  }
}

document.getElementById('score').innerHTML = questionNumSeven();
alert('the correct answer is: ' + correctResponses);

alert(`welcome in my page ${inputUser} a gain`);
