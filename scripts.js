function drawTree(line) {
	for (var i = 0; i < line; i++) {
		var star = '';
		for (var j = 0; j < i; j++) {
			var star = star + '*';
		}
		console.log(star);
	}
}

var tree = drawTree(7);