var num = prompt('Enter A Number! > 5');
var total = 0;
for (var x=1; x<=num; x++) {total = total + x}{document.write ("Exercise One <br />Total " + total +"<br/> <br/>");}
var words = ""
var play = prompt ('Do you want to play? (Yes or No)');
do {
var word = prompt ('Enter a word.');
var play = prompt ('Do you want to play? (Yes or No)');
var words = (word + " " +words);
}
while (play=="Yes")
{document.write ("Exercise Two <br/>" + words +"<br/> <br/>")}
var names = ""
var print = prompt ('Would you like to print your name? (Yes or No)');
if (print =="No") {
document.write ("Exercise Three<br/>Goodbye");
} else {
var again = prompt ('Would you like to print this name again? (Yes or No)');
while  (again =="Yes") {
		var names = (names + "!");
		var again = prompt ('Would you like to print this name again? (Yes or No)');
}
{document.write ("Exercise Three<br/>Hello my name is Adam"+ names+"<br/> <br/>")}
}
{document.write ("Exercise Four<br/>")}
var time = prompt ('What time of day is it? (Morning, Noon or Evening)');
if (time =="Morning") {document.write ("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
	} else if (time =="Noon") 
	{document.write ('Since it is noon, you should be eating lunch. We suggest a salad.');
	} else {document.write ("Since it is evening, you should be eating dinner. We suggest chicken and rice.");}
