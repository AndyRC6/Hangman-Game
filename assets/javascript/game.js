
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
	document.getElementById(level).style.borderWidth = "thick";
}

function clickOnce(){
	document.getElementById("instruction-heading").click();
}