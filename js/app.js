 'use strict';
var name= prompt("what is your name?")

alert("I am very happy for being here :)"+" " +name .toUpperCase());

console.log(name.toUpperCase());


var user= prompt("Do you love learning coding yes or no?");
if (user =="yes"){ alert("you will be a great programmer in the futute");
console.log('you will be a great programmer in the fututer');
}

else if (user =="no"){alert ("try it; it is enjoyable");
console.log('try it; it is enjoyable');
}

var choise= prompt ("Do you have an ambition or goal yes or no?");
alert("That is vital important in your life");

var socialMedia=prompt("Are you active on social media yes or no ?");

switch (socialMedia .toLocaleLowerCase()) {
    case socialMedia="yes":
        alert("please follow me on social media"+" "+name); 
        console.log('please follow me on social media');
        
        break; 
        case 'no':
        
    default: alert("try to make an account"+"" +name);
    console.log('try to make an account');
}

var job= prompt("Do you work yes or not?");
alert('That is nice' +" " +name.toLowerCase());

