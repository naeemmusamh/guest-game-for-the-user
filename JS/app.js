'use strict';

let inputUser = prompt('what is your name??');
alert(`welcome in my page ${inputUser}`);

let correctAnswers = 0;

let inputUniv = prompt('you studied in yarmouk university or not??');
if (inputUniv.toLowerCase() === 'yes' || inputUniv.toLowerCase() === 'no') {
    alert('yeahhh me too');
} else if (inputUniv.toLowerCase() === 'y' || inputUniv.toLowerCase() === 'n') {
    alert('no way, i dont like it');
} else {
    alert('any way welcome');
}

let inputFriend = prompt('you have a good time in university or not???');
if (inputFriend.toLowerCase() === 'yes' || inputFriend.toLowerCase() === 'no') {
    alert('yeahhh me too');
} else if (inputFriend.toLowerCase() === 'y' || inputFriend.toLowerCase() === 'n') {
    alert('no way, i dont like it');
} else {
    alert('any way welcome');
}

let inputWork = prompt('have you work for any company in irbid???');
if (inputWork.toLowerCase() === 'yes' || inputWork.toLowerCase() === 'no') {
    alert('yeahhh me too');
} else if (inputWork.toLowerCase() === 'y' || inputWork.toLowerCase() === 'n') {
    alert('no way, i dont like it');
} else {
    alert('any way welcome');
}

let inputYear = prompt('have you work for more than 5 year in comapy???');
if (inputYear.toLowerCase() === 'yes' || inputYear.toLowerCase() === 'no') {
    alert('yeahhh me too');
} else if (inputYear.toLowerCase() === 'y' || inputYear.toLowerCase() === 'n') {
    alert('no way, i dont like it');
} else {
    alert('any way welcome');
}

let inputWere = prompt('have you been visit LTUC???');
if (inputWere.toLowerCase() === 'yes' || inputWere.toLowerCase() === 'no') {
    alert('yeahhh me too');
} else if (inputWere.toLowerCase() === 'y' || inputWere.toLowerCase() === 'n') {
    alert('no way, i dont like it');
} else {
    alert('any way welcome');
}


for (let i = 0; i < 4; i++) {
    let answare1 = prompt('What do you expect how old I am?');
    if (answare1.toLowerCase() === '28') {
        alert('correct');
        correctAnswers++;
        break;
    } else {
        alert('no,uncorrect');
    }
}
//debugger
document.getElementById("score").innerHTML = correctAnswers;

alert('the correct answer is a 28 year');


for (let i = 0; i < 6; i++) {
    let answare2 = prompt('What do you expect that I would like to eat, be aware that I am Jordanian?');
    if (answare2.toLowerCase() === 'mansf') {
        alert('correct');
        correctAnswers++;
        break;
    } else {
        alert('no,uncorrect');
    }
}
document.getElementById("score").innerHTML = correctAnswers;

alert('the correct answer is a mansf');

alert(`welcome in my page ${inputUser} a gian`);