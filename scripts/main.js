
var player;

function playerGet(){

	player = document.getElementById("player").value;
	setDetails();
}


function setDetails(){

	document.getElementById('playerStats').innerHTML = player;

}



// check kda and see if they are good