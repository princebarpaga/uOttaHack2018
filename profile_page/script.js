var patientTime;
var docTime;


var patientList = [];

function submitP() {
	var now = new Date();
	console.log(now);
	this.patientTime = now;

}

function submitD() {
	var now = new Date();
	console.log(now);
	this.docTime = now;

}

function calculate() {
	var diff = docTime.getTime() - patientTime.getTime(); 
	var diff2 = diff / (1000);
	console.log(diff2);
}

function ask() {
	if (document.getElementById("pID").value <= 0 || document.getElementById("pID").value > 10) {
		window.alert("Your priority range is from 1 to 10! Please try again!");
		return;
	}
	//get the current Date
	var now = new Date();
	var q = document.getElementById("qID").value;
	console.log("patien asked: " + q);
	var p = document.getElementById("pID").value;
	console.log("patient's priority is: " + p);
	var patientID = document.getElementById("idID").value;
	var arr = [q, p, now, patientID];
	prioSort(arr);
	showResults();
}

function prioSort(arg) {
	if (patientList.length == 0) {
		console.log("first element pushed");
		patientList.push(arg);
		return;
	}
	for (var i=0; i<patientList.length; i++) {
		if (parseInt(arg[1]) < parseInt(patientList[i][1]) && i == 0) {
			console.log("DID");
			patientList.splice(0, 0, arg);
			return;
		}
		if (parseInt(arg[1]) < parseInt(patientList[i][1])) {
			patientList.splice(i, 0, arg);
			return;
		}
		if (i > 100) { return;}
	}
	console.log("here");
	patientList.push(arg);
}

function showResults() {
	document.getElementById("final").innerHTML = " ";
	for (var i=0; i<patientList.length; i++) {
		document.getElementById("final").innerHTML += patientList[i][0];
		document.getElementById("final").innerHTML += patientList[i][1];
		document.getElementById("final").innerHTML += '<br>';
	}
}