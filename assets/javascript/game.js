
var levels = ["lava","woods","sewer","ruins","underpass","castle"];
var enemies = ["axeman","blob1","blob2","blob3","flyer1","flyer2","goblin1","goblin2","goblin3","skull","spirit","warrior1","warrior2","warrior3","girl"];
var enemyNames = ["axeman","small blob","blob","large blob","hell bat","bat pig","goblin","goblin","large goblin","flaming skull","evil spirit","warrior","warrior","warrior","rebel soldier"];
var words = ["word","letters","blah","computer","programming","carpenter","formula","astronaut","fraud","graceful","balcony","harmony","whales","elephant","powerless","devastation","animal"];
var allLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var hatArray = [];
var currentWord;
var playerhp = 10;
var enemyhp;
var wins = 0;
var wordArray;
wrongLetter = true;
var hats = false;

function initialSetup(){
	var randLevel = levels[Math.floor(Math.random() * levels.length)];
	document.getElementById("level").src = "assets/images/" + randLevel + ".gif";
	newEnemy();

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

function addDeathCount(){
	wins = wins + 1;
	document.getElementById("win-count").textContent = "Enemies defeated: " + wins.toString();
}

function newEnemy(){
	hatArray = []
	var randEnemy = enemies[Math.floor(Math.random() * enemies.length)];
	var randWord = words[Math.floor(Math.random() * words.length)];
	currentWord = randWord;
	enemyhp = currentWord.length;
	var str = "";
	document.getElementById("enemy").src = "assets/images/enemies/" + randEnemy + ".gif";

	for (i = 0; i < currentWord.length; i++){
		str = str + "_";
		hatArray.push("<img src='assets/images/sombrero.png' id='hat-image' style='visibility:hidden;'>");
	}
	document.getElementById("hats").innerHTML = hatArray.join("");
	document.getElementById("hangman-text").textContent = str;
	document.getElementById("enemy-hp").textContent = "Enemy hp: " + enemyhp.toString();
	document.getElementById("enemy-text").textContent = "Enemy: " + enemyNames[enemies.indexOf(randEnemy)];
	wordArray = document.getElementById("hangman-text").textContent.split("");
	playerhp = 10;
	document.getElementById("hp-text").textContent = "My hp: " + playerhp.toString();
	document.getElementById("congrats").style.display = "none";
	document.getElementById("enemy").style.display = "unset";
	document.getElementById("lose").style.display = "none";

}

function resetButtons(){

}

function addHats(){
	if(hats === true){
		hatArray[i] = "<img src='assets/images/sombrero.png' id='hat-image' style='visibility:visible;'>";
		document.getElementById("hats").innerHTML = hatArray.join("");
	}
}

function toggleHats(){
	if(hats === false){
		hats = true;
	}else{
		hats = false;
	}
}

function runLogic(userInput, wordArray){
	if (playerhp > 0){
		for(i = 0; i < wordArray.length; i++){
			if(userInput.toString() === currentWord.charAt(i) && userInput !== "enter" && currentWord.charAt(i) !== wordArray[i]){
				wordArray[i] = userInput.toString();
				document.getElementById("hangman-text").textContent = wordArray.join("");
				enemyhp = enemyhp - 1;
				document.getElementById("enemy-hp").textContent = "hp: " + enemyhp.toString();
				document.getElementById(userInput).classList.remove("btn-primary");
				document.getElementById(userInput).classList.add("btn-success");
				wrongLetter = false;
				addHats();
			}else if(i === wordArray.length - 1 && wrongLetter === true && userInput !== "enter" && !document.getElementById(userInput).classList.contains("btn-success") && enemyhp > 0){
				document.getElementById(userInput).classList.remove("btn-primary");
				document.getElementById(userInput).classList.add("btn-danger");
				playerhp = playerhp - 1;
				document.getElementById("hp-text").textContent = "My hp: " + playerhp.toString();
			}
		}
		if (enemyhp <= 0){
			document.getElementById("congrats").style.display = "block";
			document.getElementById("enemy").style.display = "none";
		}
		if(playerhp <= 0){
			document.getElementById("lose").style.display = "block";
			document.getElementById("enemy").style.display = "none";
		}

		if(userInput === "enter"){
			if (enemyhp <= 0){
			for (i = 0; i < allLetters.length; i++){
				if(document.getElementById(allLetters[i].toString()).classList.contains("btn-success")){
					document.getElementById(allLetters[i]).classList.remove("btn-success");
					document.getElementById(allLetters[i]).classList.add("btn-primary");
				}
				else if(document.getElementById(allLetters[i].toString()).classList.contains("btn-danger")){
					document.getElementById(allLetters[i]).classList.remove("btn-danger");
					document.getElementById(allLetters[i]).classList.add("btn-primary");
				}
			}	
				addDeathCount();
				newEnemy();
			}

		}
		wrongLetter = true;

		}else if (userInput === "enter"){
			for (i = 0; i < allLetters.length; i++){
				if(document.getElementById(allLetters[i].toString()).classList.contains("btn-success")){
					document.getElementById(allLetters[i]).classList.remove("btn-success");
					document.getElementById(allLetters[i]).classList.add("btn-primary");
				}
				else if(document.getElementById(allLetters[i].toString()).classList.contains("btn-danger")){
					document.getElementById(allLetters[i]).classList.remove("btn-danger");
					document.getElementById(allLetters[i]).classList.add("btn-primary");
				}
			}			
			wins = 0;
			document.getElementById("win-count").textContent = "Enemies defeated: " + wins.toString();
			initialSetup();
		}
	}

document.onkeyup = function(event){
	var userInput = event.key.toLowerCase();
	
	runLogic(userInput, wordArray);
}