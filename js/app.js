'use strict';
var name = prompt("what is your name?")
alert("I am very happy for being here :)" + " " + name.toUpperCase());
console.log(name.toUpperCase());

var count = 0;
var user = prompt("Do you love learning coding yes or no?");
if (user === "yes") {
    alert("you will be a great programmer in the future");
    console.log('you will be a great programmer in the fututer');
    count++;
}

else if (user === "no") {
    alert("try it; it is enjoyable");
    console.log('try it; it is enjoyable');
}
var choice = prompt("Do you have an ambition or goal yes or no?");
if (choice === "yes") {
    alert("That is extremly important in your life");
    count++;
}

else if (choice == "no") { alert("that makes your life useless"); }

var socialMedia = prompt("Are you active on social media yes or no ?");
switch (socialMedia.toLocaleLowerCase()) {
    case socialMedia = "yes":
        alert("please follow me on social media" + " " + name);
        console.log('please follow me on social media');
        count++;
        break;
    case 'no':
    default: alert("try to make an account" + " " + name);
        console.log('try to make an account');
}
var job = prompt("Do you work yes or not?");
if (job === "yes") {
    alert('That is nice' + "  " + name.toLowerCase());
    count++;
}
else if (job === "no") { alert("working is very initial in your life"); }
var game = prompt("Do you like guessing game yes or no?");
switch (game) {
    case 'yes':
        alert("let/s start yaayaaayyh");
        count++;
        break;

    default: alert("try it, It is really exciting and there are gifts if you guess true");
        break;
}

alert('let\s play guessing game I will ask you questions and you have four tryings to guess. be attention and do not forget answer by using number :)');


for (var i = 0; i < 4; i++) {
    var weight = prompt('guess what is my weight in KG?');
    if (weight === '60') {
        alert("oh my god you are a divin person");
        count++;
        break;
    }
    if (weight > '70') {
        alert("That too high:( I do not eat alot");
        console.log("That too high:( I do not eat alot");
    }
    else if (weight < '60') {
        alert("That is too little do you think I fast alot");
        console.log("That is too little do you think I fast alot");
    }
    else if (weight % 2 !== 0) {
        alert("you shouldn't choose odd numbers");
        console.log("you shouldn't choose odd numbers");
    }
}
alert('The answer is 60. I am fit ;))');


var color = ['green', 'black', 'pink', 'mouve', 'purpel', "white",];
for (var k = 0; k < color.length; k++) {
    var favoriteColor = prompt("guess What are your favorite colors?");
    if (favoriteColor === color[k]) {
        alert("your answer is true");
        count++;
        break;
    }
    else {
        alert("your answer is false");
    }
}
alert("the right answer is ['green', 'black', 'pink', 'mouve', 'purpel',]");
alert("you score is" + count++);