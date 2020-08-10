// JavaScript Document

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
    [ "what is 2+3*2?", "11", "08", "10", "14", "B" ],
	[ "what is 2/2?", "1", "2", "0", "4", "A" ],
	[ "what is 2-2*2?", "00", "null", "02", "-2", "D" ],
	[ "what is 6/6*6?", "01", "18", "06", "00", "C" ],
	[ "what is 5*6/6?", "30", "06", "00", "05", "D" ],
	[ "what is 1*0+4?", "01", "08", "00", "04", "D" ],
	[ "what is 2+2/10?", "0.1", "0.2", "0.4", "14", "C" ],
	[ "what is 2+0*2?", "2", "0", "1", "4", "B" ],
	[ "what is 2+2*2?", "06", "08", "10", "04", "A" ],
	[ "what is 2+-3*2?", "01", "08", "-4", "-2", "D" ]
];
function _(x)
{
	return document.getElementById(x);
}

var min = 0;  
            var sec = 59;  
            var timer;  
            var timeon = 0 
			var t;   ;  
            function ActivateTimer() {  
                if (!timeon) {  
                    timeon = 1;  
                    Timer(); 
					takequestion();  
				  }
            }   
			
            function Timer() {  
  
                var _time = min + ":" + sec;  
                document.getElementById("Label1").innerHTML =_time;  
                if (_time != "0:0") {  
  
                    if (sec == 0) {  
                        min = min - 1;  
                        sec = 59;  
                    } else {  
                        sec = sec - 1;  
                    }  
                    timer = setTimeout("Timer()", 1000);  
                }  
              
				else
				{
		 alert("Time is out");
		 if(correct>7)
		 {
		test.innerHTML = "<h2> you got "+correct+" of "+questions.length+" questions correct</h2><br><br><h1>congrats You passed the quiz</h1>";
		_("test_status").innerHTML = "Test Completed";
		 pos=0;
		 correct = 0;
		 return false;
		 }
		 else if(correct<7)
		 {
			  test.innerHTML = "<h2> you got "+correct+" of "+questions.length+" questions correct</h2> <br><br><h1>sorry You fail in this quiz</h1>";
		_("test_status").innerHTML = "Test Completed";
		 pos=0;
		 correct = 0;
		 return false;
		
				}
            }  
			}
			function stopCount() {
            clearTimeout(t);
            timeon = 0;
}
function takequestion()
{
	test = _("test");
	if(pos>=questions.length)
	{
		 if(correct>7)
		 {
		test.innerHTML = "<h2> you got "+correct+" of "+questions.length+" questions correct</h2><br><br><h1>congrats You passed the quiz</h1>";
		_("test_status").innerHTML = "Test Completed";
		 pos=0;
		 correct = 0;
		 stopCount(); 
		 return false;
		 }
		 else if(correct<7)
		 {
			  test.innerHTML = "<h2> you got "+correct+" of "+questions.length+" questions correct</h2> <br><br><h1>sorry You fail in this quiz</h1>";
		_("test_status").innerHTML = "Test Completed";
		 pos=0;
		 correct = 0;
         stopCount();
		 return false;
		
				}
	}
	
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	test.innerHTML = "<h3>"+question+"<h3>";
	test.innerHTML += "A  <input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "B  <input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "C  <input type='radio' name='choices' value='C'> "+chC+"<br>";
	test.innerHTML += "D  <input type='radio' name='choices' value='D'> "+chD+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Next</button>";
}

function checkAnswer()
{
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++)
	{
		if(choices[i].checked)
		{
			choice =choices[i].value;
		}
	}
	if(choice == questions[pos][5])
	{
		correct++;
	}
	pos++;
	takequestion();
}
window.addEventListener("load", ActivateTimer, false);
window.addEventListener("load", takequestion, false);
