var workouts= ["Pushups","Pullups","Squats","Bridges","Handstand Pushups","Leg Raises"];
workouts.constructor;


var pushupCreated=false;
var pushupVar= ["Wall","Inclined","Kneeling","Half","Full","Close","Uneven","1-Arm Half","Lever","1-Arm"];
var pushupBeginRep=[10,10,10,8,5,5,5,5,5];
var pushupProgressRep=[50,40,30,25,20,20,20,20,20,100];
pushupVar.constructor;
pushupBeginRep.constructor;
pushupProgressRep.constructor;

var pullupCreated=false;
var pullupVar= ["Vertical","Horizontal","Jack Knife","Half","Full","Uneven","1-Arm Half","Assisted 1-Arm","1-Arm"];
var pullupBeginRep=[10,10,10,8,5,5,5,4,3,1];
var pullupProgressRep=[40,30,20,15,10,10,9,8,7,6];
pullupVar.constructor;
pullupBeginRep.constructor;
pullupProgressRep.constructor;

var legraiseCreated=false;
var legraisesVar= ["Knee Tucks","Flat Knee Raises","Flat Bent Leg Raises","Flat Frog Raises","Flat Straight Leg Raises","Hanging Knee Raises","Hanging Bent Leg Raises", "Hanging Frog Raises", "Partial Straight Leg Raises","Hanging Straight Leg Raises"];
var legraisesBeginRep=[10,10,10,8,5,5,5,5,5,5];
var legraisesProgressRep=[40,35,30,25,20,15,15,15,15,30];
legraisesVar.constructor;
legraisesBeginRep.constructor;
legraisesProgressRep.constructor;

var squatCreated=false;
var squatVar=["Shoulderstand","Jackknife","Supported","Half","Full","Close","Uneven","Half 1-Legged","Assisted 1-Legged","1-Legged"];
var squatBeginRep=[10,10,10,8,5,5,5,5,5,5];
var squatProgressRep=[50,40,30,50,30,20,20,20,20,50];
squatVar.constructor;
squatBeginRep.constructor;
squatProgressRep.constructor;

var bridgeCreated=false;
var bridgeVar=["Short","Straight","Angled","Head","Half","Full","Wall Walking (Down)","Wall Walking (Up)","Closing","Stand-to-Stand"];
var bridgeBeginRep=[10,10,8,8,8,6,3,2,1,1];
var bridgeProgressRep=[50,40,30,25,20,15,10,8,6,10];
bridgeVar.constructor;
bridgeBeginRep.constructor;
bridgeProgressRep.constructor;

var handstandpushupCreated=false;
var handstandPushupsVar=["Wall Headstands","Crow Stands","Wall Handstands","Half Handstand PushUps","Handstand PushUps","Close Handstand PushUps","Uneven Handstand PushUps","Half 1-Arm Handstand PushUps","Lever Handstand PushUps","1-Arm Handstand PushUps"];
var handstandPushupsBeginRep=[30,10,30,5,5,5,5,4,3,1];
var handstandPushupsProgressRep=[120,60,120,20,15,12,10,8,6,5]
handstandPushupsVar.constructor;
handstandPushupsBeginRep.constructor;
handstandPushupsProgressRep.constructor;


//progress vars
var repProgress=[10,10,10,10,10,30];
repProgress.constructor;

//logic arrays
var doArray=["doPushups","doPullups","doSquats","doBridges","doHSPushups","doLegraises"];
doArray.constructor;
var checkArray=["pushupsCheck","pullupsCheck","squatsCheck","bridgesCheck","hspushupsCheck","legraisesCheck"];
checkArray.constructor;
var nameArray=["pushups","pullups","squats","bridges","handstandpushups","legraises"];
nameArray.constructor;
var versionArray=["","","","","",""];
versionArray.constructor;

var indexUsed;

function setRepExercise(){
	document.getElementById("btnSucess").addEventListener("click", success_Prompt);
	document.getElementById("btnFail").addEventListener("click", fail_Prompt);
	var choiceMade=false;
	for(i=0;i<6;i++){
		if(localStorage.getItem(doArray[i])=="true"){
			choiceMade=true;
		}
	}
	if(choiceMade==false){
		document.getElementById("nochoice").innerHTML="Go make some selections on the Options Page!";
		document.getElementById("nochoice").innerHTML="<h1 id=\"nochoice\" >Go make some selections on the <button id=\"btnOptions\" type=\button\ \">Options</button> Page!</h1>";
		document.getElementById("btnOptions").addEventListener("click",openOptions);
	}else{
		while(localStorage.getItem(doArray[index])!="true"){
			var index=randomIntFromInterval(0,5);
		}
		document.getElementById("exercise").innerHTML=localStorage.getItem(workouts[index]);
		if(index!=4){
			document.getElementById("exercise").innerHTML=document.getElementById("exercise").innerHTML+" "+workouts[index];
		}
		if(!(localStorage.getItem(index))){
			document.getElementById("reps").innerHTML=repProgress[index];
			localStorage.setItem(index,repProgress[index]);
			indexUsed=index;
		}else{
			document.getElementById("reps").innerHTML=localStorage.getItem(index);
			indexUsed=index;
		}
	}
	
}

function openOptions(){
	window.open("workout_settings.html");
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function success_Prompt() {
			
	<!-- Update user prompt -->
	document.getElementById("userInstructions").innerHTML = "How difficult was the workout?";

	document.getElementById("btnSucess").removeEventListener("click", success_Prompt);
	document.getElementById("btnFail").removeEventListener("click", fail_Prompt);
<!-- Remove existing buttons -->
	element = document.getElementById("btnSucess");
	element.parentNode.removeChild(element);
	element = document.getElementById("btnFail");
	element.parentNode.removeChild(element);
	
	<!-- Create the easy button-->
	
	divHTML = document.getElementById("div1").innerHTML;
	divHTML = divHTML.concat("<button id=\"btnEasy\" type=\button\ \">Easy</button>");
	document.getElementById("div1").innerHTML = divHTML;
	
	
	<!-- Create the hard button-->
	
	divHTML = document.getElementById("div1").innerHTML;
	divHTML = divHTML.concat("<button id=\"btnHard\" type=\button\ \">Hard</button>");
	document.getElementById("div1").innerHTML = divHTML;
	
	document.getElementById("btnEasy").addEventListener("click",setEasy);
	document.getElementById("btnHard").addEventListener("click",setHard);
}

function fail_Prompt() {

	<!-- Update user instruction text -->
	document.getElementById("userInstructions").innerHTML = "How many reps did you complete?";
	
	document.getElementById("btnSucess").removeEventListener("click", success_Prompt);
	document.getElementById("btnFail").removeEventListener("click", fail_Prompt);
	<!-- Remove Existing Buttons -->
	element = document.getElementById("btnSucess");
	element.parentNode.removeChild(element);
	element = document.getElementById("btnFail");
	element.parentNode.removeChild(element);

	<!-- Create text box -->
	
	divHTML = document.getElementById("div1").innerHTML;
	divHTML = divHTML.concat("<input id=\"repIn\" type=\input\ size=2></input>");
	document.getElementById("div1").innerHTML = divHTML;
	
	<!-- Create the log button-->
	
	divHTML = document.getElementById("div1").innerHTML;
	divHTML = divHTML.concat("<button id=\"btnLog\" type=\button\ \">Log</button>");
	document.getElementById("div1").innerHTML = divHTML;
	document.getElementById("btnLog").addEventListener("click",adjustFailedReps);
				
}

function adjustFailedReps(){
	var newReps=Number(document.getElementById("repIn").value)+randomIntFromInterval(1,3);
	localStorage.setItem(indexUsed,newReps);
	
	<!-- Update user instruction text -->
	document.getElementById("userInstructions").innerHTML = "Don't worry, it will be a little easier next time! Feel free to close this tab now.";
	
	document.getElementById("btnLog").removeEventListener("click",adjustFailedReps);
	<!-- Remove Existing Buttons -->
	element = document.getElementById("btnLog");
	element.parentNode.removeChild(element);
	element = document.getElementById("repIn");
	element.parentNode.removeChild(element);
}

function setEasy() {
			<!-- Update user instruction text -->
	document.getElementById("userInstructions").innerHTML = "Easy? It'll be harder next time! Feel free to close this tab now.";
	var newReps=Number(localStorage.getItem(indexUsed))+randomIntFromInterval(1,3);
	localStorage.setItem(indexUsed,newReps);
	
	document.getElementById("btnEasy").removeEventListener("click",setEasy);
	document.getElementById("btnHard").removeEventListener("click",setEasy);
	<!-- Remove Existing Buttons -->
	element = document.getElementById("btnEasy");
	element.parentNode.removeChild(element);
	element = document.getElementById("btnHard");
	element.parentNode.removeChild(element);
}
			
function setHard() {
		<!-- Update user instruction text -->
	document.getElementById("userInstructions").innerHTML = "Hard? But you completed it! It'll be easy next time! Feel free to close this tab now.";
	var newReps=Number(localStorage.getItem(indexUsed))+randomIntFromInterval(1,3);
	localStorage.setItem(indexUsed,newReps);
	
	document.getElementById("btnEasy").removeEventListener("click",setEasy);
	document.getElementById("btnHard").removeEventListener("click",setEasy);
	<!-- Remove Existing Buttons -->
	element = document.getElementById("btnEasy");
	element.parentNode.removeChild(element);
	element = document.getElementById("btnHard");
	element.parentNode.removeChild(element);
}
		
function repTotal() {
	uReps = document.getElementById("repIn").value;
}

document.addEventListener('DOMContentLoaded',setRepExercise);
