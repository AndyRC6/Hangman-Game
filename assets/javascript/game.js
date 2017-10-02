
var levels = ["lava","woods","sewer","ruins","underpass","castle"];
var enemies = ["axeman","blob1","blob2","blob3","flyer1","flyer2","goblin1","goblin2","goblin3","skull","spirit","warrior1","warrior2","warrior3","girl"];
var words = ["word","letters","blah","computer","programming"];
var currentWord;

function initialSetup(){
	var randLevel = levels[Math.floor(Math.random() * levels.length)];
	var randEnemy = enemies[Math.floor(Math.random() * enemies.length)];
	var randWord = words[Math.floor(Math.random() * words.length)];
	var str = "";
	document.getElementById("level").src = "assets/images/" + randLevel + ".gif";
	document.getElementById("enemy").src = "assets/images/enemies/" + randEnemy + ".gif";

	for (i = 0; i < randWord.length; i++){
		str = str + "_";
	}
	document.getElementById("hangman-text").textContent = str;

}

function displayInstructions(){

	if(document.getElementById("instruction-div").style.display == "none"){
		document.getElementById("instruction-div").style.display = "block";
		document.getElementById("instruction-heading-text").textContent = "Instructions ▼";
	}else {
		document.getElementById("instruction-div").style.display = "none";
		document.getElementById("instruction-heading-text").textContent = "Instructions ►";
	}
}

function changeLevel(level){
	document.getElementById("lava").style.borderWidth = "thin";
	document.getElementById("lava").style.borderColor = "#ddd";
	document.getElementById("woods").style.borderWidth = "thin";
	document.getElementById("woods").style.borderColor = "#ddd";
	document.getElementById("sewer").style.borderWidth = "thin"
	document.getElementById("sewer").style.borderColor = "#ddd";
	document.getElementById("ruins").style.borderWidth = "thin";
	document.getElementById("ruins").style.borderColor = "#ddd";
	document.getElementById("underpass").style.borderWidth = "thin";
	document.getElementById("underpass").style.borderColor = "#ddd";
	document.getElementById("castle").style.borderWidth = "thin";
	document.getElementById("castle").style.borderColor = "#ddd";


	document.getElementById(level).style.borderWidth = "thick";
	document.getElementById(level).style.borderColor = "#F3B329";

	document.getElementById("level").src = "assets/images/" + level + ".gif"
}

function clickOnce(){
	document.getElementById("instruction-heading").click();
}
