var name = "Sam";
alert("Hello" + name);

var name ="YuYan";
var age = 19; 
var isBoy = false;
var fruits = ["apple","banana","peach"];

alert(name); //Yu
alert(age); //18
alert(isBoy); //true
alert(fruits[0]); //apple
alert(fruits[2]); //peach

function addition(num){
	return num+10;
}
var age = 9;
var trueage = addition(age);
alert(trueage);

var age2 = 10;
var trueage2 = addition(age2);
alert(trueage2);

function test(){
	a = 123;
	var b = 456;
	if (a == 123) 
		var c = 789;
}

document.getElementById("byid").innerHTML="我來自ID";
document.getElementById("byid").style.color="blue";
document.getElementsByClassName("byclass")[0].innerHTML="我來自class";
document.getElementsByClassName("byclass")[0].style.fontSize="30px";
document.getElementsByTagName("div")[2].innerHTML="我來自Tag";
document.getElementsByTagName("div")[2].style.fontFamily="微軟正黑體";

document.getElementsByTagName("p")[0].innerHTML="我來自pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp";
document.getElementsByTagName("p")[0].style.color="red";
document.getElementsByTagName("p")[0].style.fontSize="30px";
