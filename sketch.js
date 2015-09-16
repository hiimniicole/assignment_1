var img;
function setup() {
	// create a place to draw
	createCanvas(640, 360);
	img = loadImage("test.jpeg");
}

function draw() {
	// clear the background - skyblue
  background(102,153,204);
	//image(img, 0, 0, 200, 200);
	// set a fill color white
	fill(102, 51, 51);
	// draw ground
	noStroke();
	// rectMode(CENTER);
	rect(35, 100 , 80, 200);
  //tree bottom
	rect(340,100,80,200)
//3rd tree bottom
rect(525,100,80,200)
//rect grass
rect(80,200,100,200)

//stroke for the tree bush
noStroke(0,0,0);

//fill for filler 2nd tree
fill(0,153,0);
//filler for tree bushes
ellipse(400, 170, 50, 50);
ellipse(430, 140, 50, 50);
ellipse(350, 140, 50, 50);
ellipse(345, 140, 50, 50);
ellipse(380, 140, 50, 50);
ellipse(350,140, 40, 40);
ellipse(350,100,60,60);
ellipse(397,100,55,55);
ellipse(360,160,55,55);
	// set a stroke color

	//fill for filler 2nd tree
	fill(0,153,0);
	//filler for tree bushes
	ellipse(525, 170, 50, 50);
	ellipse(520, 140, 50, 50);
	ellipse(550, 140, 50, 50);
	ellipse(580, 140, 50, 50);
	ellipse(590, 140, 50, 50);
	ellipse(550,140, 40, 40);
	ellipse(550,100,60,60);
	ellipse(597,100,55,55);
	ellipse(560,160,55,55);
		// set a stroke color


//first tree top
	//stroke for the tree top
	noStroke(0,0,0);

	//fill for filler tree
	fill(0,153,0);
	//filler for tree bushes
	ellipse(100, 170, 50, 50);
	ellipse(130, 140, 50, 50);
	ellipse(70, 140, 50, 50);
	ellipse(45, 140, 50, 50);
	ellipse(80, 140, 50, 50);
	ellipse(100,140, 40, 40);
	ellipse(50,100,60,60);
	ellipse(97,100,55,55);
	ellipse(60,160,55,55);
}
