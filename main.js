function displayLevelInfo(){
	var levelEntry = Number(document.getElementById('levelInput').value);
	
	switch (levelEntry) {
	case 1:
	document.getElementById("displayLevel").innerHTML="Level: Tutorial Stage";
	break;
	case 2:
	document.getElementById("displayLevel").innerHTML="Level: Stage 1";
	break;
	case 3:
	document.getElementById("displayLevel").innerHTML="Level: Stage 2";
	break;
	
	default:
		window.alert("Invalid Section Number");
	}

}