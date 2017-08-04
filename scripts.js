function drawTree(line) {
	for (var i = 0; i < 7; i++) {
		var star = '';
		for (var j = 0; j < i; j++) {
			var star = star + '*';
		}
		console.log(star);
	}
}

drawTree(7);