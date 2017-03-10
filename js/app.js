var solution = Math.floor(Math.random() *4); {

	console.log(solution);
}

	for (var i = 0; i < 3; i++) {
		var response = prompt("veuillez entre un chiffre entre 0 et 3");
		console.log(response);


		if(response==solution) {
			console.log("Gagné");
			break;
		}
		else if(i==2) {
			console.log("Perdu");
			break;
		}

		if(response>solution) {
			console.log("trop grand");
		}

		else {
			console.log("trop petit");
		}
		}

