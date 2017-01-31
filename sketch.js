var dt;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dt = {a: 0, b: 0, r: 0, x: 0.5, y: 0.5, s: min(2 * windowWidth/3, 2 * windowHeight/3)};
}

function draw() {
	background("white");
	fill("teal");
	translate(windowWidth/2, windowHeight/2);
	rotate(dt.r += random(0.005, 0.01));
	dt.x = 0.5 + Math.sin(dt.a += 0.045) * 0.25;
    dt.y = 0.5 + Math.sin(dt.b += 0.045) * 0.25;
	sierpenski(
		createVector(0, dt.s / pow(3, 1/2)),
		createVector(-dt.s/2, -dt.s/ (2 * pow(3, 1/2))),
		createVector(dt.s/2, -dt.s/ (2 * pow(3, 1/2))),
		3
	)
}

function randomColour() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function midpoint (a, b) {
	var v3 = p5.Vector.div((p5.Vector.add(a,b)),2);
	return v3;
}

function sierpenski(a, b, c, rank) {
	if (rank <= 0) {
		triangle(a.x, a.y, b.x, b.y, c.x, c.y);
	} else {
		sierpenski(a, p5.Vector.mult(midpoint(a,b), dt.x), p5.Vector.mult(midpoint(c,a),dt.y),rank-1);
		sierpenski(b, p5.Vector.mult(midpoint(a,b), dt.x), p5.Vector.mult(midpoint(b,c),dt.y),rank-1);
		sierpenski(c, p5.Vector.mult(midpoint(a,c), dt.x), p5.Vector.mult(midpoint(c,b),dt.y),rank-1);

	}
}
