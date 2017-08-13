var pos=0,test,text_status,question,choice,choices,chA,chB,chC,correct=0;
var questions=[
	["A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?","120 metres","150 metres","180 metres","B"],
	["The cube root of .000216 is:","0.6",".06","77","B"],
	["Which one of the following is not a prime number?","91","31","61","A"],
	["What least number must be added to 1056, so that the sum is completely divisible by 23 ?","08","03","02","C"]
];
function _(x){
return document.getElementById(x);
}
function renderQuestion(){
	test=_("test");
	if(pos>=questions.length){
	test.innerHTML="<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
	_("test_status").innerHTML="Test Completed ";
		
	pos=0;
	correct=0;
	return false;
	}
	_("test_status").innerHTML="Question "+(pos+1)+" of "+questions.length;
	question=questions[pos][0];
	chA=questions[pos][1];
	chB=questions[pos][2];
	chC=questions[pos][3];
	
	test.innerHTML = "<h3>" + question + "</h3>" +
	"<h3><input type='radio' name='choices' value='A'> " + chA + "<br>" +
	"<h3><input type='radio' name='choices' value='B'> " + chB + "<br>" +
	"<h3><input type='radio' name='choices' value='C'> " + chC + "<br><br>" +
	"<button class='button' onclick='checkAnswer()'>SUBMIT ANSWER</button>";
}
function checkAnswer(){
	choices= document.getElementsByName("choices");
	for(var i=0;i<choices.length;i++){
		if(choices[i].checked){
		choice=choices[i].value;
		}
	}
	if(choice==questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}
window.addEventListener("load",renderQuestion,false);
