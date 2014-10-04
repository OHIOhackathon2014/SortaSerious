var workouts= ["Pushups","Pullups","Leg Raises","Bridges","Squats","Handstand Pushups"];
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
var pushupProgress=[0,10];
pushupProgress.constructor;
var pullupProgress=[0,10];
pullupProgress.constructor;
var squatProgress=[0,10];
squatProgress.constructor;
var legraiseProgress=[0,10];
legraiseProgress.constructor;
var bridgeProgress=[0,10];
bridgeProgress.constructor;
var hspushupProgress=[0,30];
hspushupProgress.constructor;

function addExcludedSite(){
		var site=document.getElementById("excludedSite").value;
		var select=document.getElementById("siteSelect");
		var option=document.createElement("option");
		option.text=site;
		select.add(option);
		document.getElementById("excludedSite").value="";
	}
	
function removeExcludedSite(){
	var select=document.getElementById("siteSelect");
	var index=select.selectedIndex;
	document.getElementById("test").innerHTML=index;
	if(index!=-1){
		select.remove(index);
	}
}

function checkSelect(){
	var select=document.getElementById("siteSelect");
	var index=select.selectedIndex;
	if(index==-1){
		document.getElementById("removeButton").disabled=true;
	}else{
		document.getElementById("removeButton").disabled=false;
	}
}

document.getElementById("pushupsCheck").onchange=function(){
	if(document.getElementById("pushupsCheck").checked&&!pushupCreated){
		pushupCreated=true;
		var length=pushupVar.length;
		for(i=0; i<length;i++){
			currentWorkout=pushupVar[i].toString();
			var radio=document.createElement("INPUT");
			radio.setAttribute("type","radio");
			radio.setAttribute("name","pushups");
			radio.setAttribute("id",currentWorkout);
			radio.value=currentWorkout;

			var newDiv=document.createElement('div');
			newDiv.id=currentWorkout;
			newDiv.name="pushups";
				
			var span=document.createElement('span');
			span.innerHTML=currentWorkout;
	
			newDiv.appendChild(radio);
			newDiv.appendChild(span);
			
			document.getElementById("pushupsRadio").appendChild(newDiv);
			
			lastWorkout=currentWorkout;
		}
	}else if(!document.getElementById("pushupsCheck").checked){
		document.getElementById("pushupsRadio").style.display="none";
	}else{
		document.getElementById("pushupsRadio").style.display="inline";
	}
};

document.getElementById("pullupsCheck").onchange=function(){
	if(document.getElementById("pullupsCheck").checked&&!pullupCreated){
		pullupCreated=true;
		var length=pullupVar.length;
		for(i=0; i<length;i++){
			currentWorkout=pullupVar[i].toString();
			var radio=document.createElement("INPUT");
			radio.setAttribute("type","radio");
			radio.setAttribute("name","pullups");
			radio.setAttribute("id",currentWorkout);
			radio.value=currentWorkout;

			var newDiv=document.createElement('div');
			newDiv.id=currentWorkout;
			newDiv.name="pullups";
				
			var span=document.createElement('span');
			span.innerHTML=currentWorkout;
	
			newDiv.appendChild(radio);
			newDiv.appendChild(span);
			
			document.getElementById("pullupsRadio").appendChild(newDiv);
			
			lastWorkout=currentWorkout;
		}
	}else if(!document.getElementById("pullupsCheck").checked){
		document.getElementById("pullupsRadio").style.display="none";
	}else{
		document.getElementById("pullupsRadio").style.display="inline";
	}
};

document.getElementById("squatsCheck").onchange=function(){
	if(document.getElementById("squatsCheck").checked&&!squatCreated){
		squatCreated=true;
		var length=squatVar.length;
		for(i=0; i<length;i++){
			currentWorkout=squatVar[i].toString();
			var radio=document.createElement("INPUT");
			radio.setAttribute("type","radio");
			radio.setAttribute("name","squats");
			radio.setAttribute("id",currentWorkout);
			radio.value=currentWorkout;

			var newDiv=document.createElement('div');
			newDiv.id=currentWorkout;
			newDiv.name="squats";
				
			var span=document.createElement('span');
			span.innerHTML=currentWorkout;
	
			newDiv.appendChild(radio);
			newDiv.appendChild(span);
			
			document.getElementById("squatsRadio").appendChild(newDiv);
			
			lastWorkout=currentWorkout;
		}
	}else if(!document.getElementById("squatsCheck").checked){
		document.getElementById("squatsRadio").style.display="none";
	}else{
		document.getElementById("squatsRadio").style.display="inline";
	}
};

document.getElementById("bridgesCheck").onchange=function(){
	if(document.getElementById("bridgesCheck").checked&&!bridgeCreated){
		bridgeCreated=true;
		var length=bridgeVar.length;
		for(i=0; i<length;i++){
			currentWorkout=pushupVar[i].toString();
			var radio=document.createElement("INPUT");
			radio.setAttribute("type","radio");
			radio.setAttribute("name","bridges");
			radio.setAttribute("id",currentWorkout);
			radio.value=currentWorkout;

			var newDiv=document.createElement('div');
			newDiv.id=currentWorkout;
			newDiv.name="bridges";
				
			var span=document.createElement('span');
			span.innerHTML=currentWorkout;
	
			newDiv.appendChild(radio);
			newDiv.appendChild(span);
			
			document.getElementById("bridgesRadio").appendChild(newDiv);
			
			lastWorkout=currentWorkout;
		}
	}else if(!document.getElementById("bridgesCheck").checked){
		document.getElementById("bridgesRadio").style.display="none";
	}else{
		document.getElementById("bridgesRadio").style.display="inline";
	}
};

document.getElementById("legraisesCheck").onchange=function(){
	if(document.getElementById("legraisesCheck").checked&&!legraiseCreated){
		legraiseCreated=true;
		length=pushupVar.length;
		for(i=0; i<length;i++){
			currentWorkout=pushupVar[i].toString();
			var radio=document.createElement("INPUT");
			radio.setAttribute("type","radio");
			radio.setAttribute("name","legraises");
			radio.setAttribute("id",currentWorkout);
			radio.value=currentWorkout;

			var newDiv=document.createElement('div');
			newDiv.id=currentWorkout;
			newDiv.name="legraises";
				
			var span=document.createElement('span');
			span.innerHTML=currentWorkout;
	
			newDiv.appendChild(radio);
			newDiv.appendChild(span);
			
			document.getElementById("legraisesRadio").appendChild(newDiv);
			
			lastWorkout=currentWorkout;
		}
	}else if(!document.getElementById("legraisesCheck").checked){
		document.getElementById("legraisesRadio").style.display="none";
	}else{
		document.getElementById("legraisesRadio").style.display="inline";
	}
};

document.getElementById("hspushupsCheck").onchange=function(){
	if(document.getElementById("hspushupsCheck").checked&&!handstandpushupCreated){
		handstandpushupCreated=true;
		var length=handstandPushupsVar.length;
		for(i=0; i<length;i++){
			currentWorkout=handstandPushupsVar[i].toString();
			var radio=document.createElement("INPUT");
			radio.setAttribute("type","radio");
			radio.setAttribute("name","handstandpushups");
			radio.setAttribute("id",currentWorkout);
			radio.value=currentWorkout;

			var newDiv=document.createElement('div');
			newDiv.id=currentWorkout;
			newDiv.name="handstandpushups";
				
			var span=document.createElement('span');
			span.innerHTML=currentWorkout;
	
			newDiv.appendChild(radio);
			newDiv.appendChild(span);
			
			document.getElementById("hspushupsRadio").appendChild(newDiv);
			
			lastWorkout=currentWorkout;
		}
	}else if(!document.getElementById("hspushupsCheck").checked){
		document.getElementById("hspushupsRadio").style.display="none";
	}else{
		document.getElementById("hspushupsRadio").style.display="inline";
	}
};

// Saves options to chrome.storage
function save_options() {
	var doPushups=document.getElementById("pushupsCheck").checked;
	var doPullups=document.getElementById("pullupsCheck").checked;
	var doSquats=document.getElementById("squatsCheck").checked;
	var doLegraises=document.getElementById('legraisesCheck').checked;
	var doBridges=document.getElementById('bridgesCheck').checked;
	var doHSPushups=document.getElementById('hspushupsCheck').checked;
	
	var timingInterval=document.getElementById("timingInterval").selectedIndex;
	
	chrome.storage.sync.set({
		doPushups:doPushups,
		doPullups:doPullups,
		doSquats:doSquats,
		doLegraises:doLegraises,
		doBridges:doBridges,
		doHSPushups:doHSPushups,
		timingInterval:timingInterval
		}, function(){
			//update status to let user know options were saved
			var status=document.getElementById('status');
			status.textContent='Options saved.';
			setTimeout(function(){
				status.textContent='';
		},750);
	});
	
}
	


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
		doPushups: false,
		doPullups: false,
		doSquats: false,
		doLegraises: false,
		doBridges: false,
		doHSPushups: false,
		timingInterval: 0
   }, function(items) {
		document.getElementById("pushupsCheck").checked=items.doPushups;
		document.getElementById("pullupsCheck").checked=items.doPullups;
		document.getElementById("squatsCheck").checked=items.doSquats;
		document.getElementById('legraisesCheck').checked=items.doLegraises;
		document.getElementById('bridgesCheck').checked=items.doBridges;
		document.getElementById('hspushupsCheck').checked=items.doHSPushups;
	
		document.getElementById("timingInterval").selectedIndex=timingInterval;
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.body.addEventListener('click',checkSelect,true);
document.getElementById('removeButton').addEventListener('click',removeExcludedSite);
