//Create a reference for canvas 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var backgroundImageTag;
var greenCarImageTag;

//Give specific height and width to the car image

var greenCarWidth = 75;
var greenCarHeight = 100;
var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

//Set initial position for a car image.
var greenCarX = 5;
var greenCarY = 225;

function add() {
	backgroundImageTag = new Image();
	backgroundImageTag.onload = uploadBackground;
	backgroundImageTag.src = background_image;

	greenCarImageTag = new Image();
	greenCarImageTag.onload = uploadgreencar;
	greenCarImageTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(backgroundImageTag, 0, 0, canvas.clientWidth, canvas.clientHeight);
}

function uploadgreencar() {
	ctx.drawImage(greenCarImageTag, greenCarX, greenCarY, greenCarWidth, greenCarHeight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greenCarY >= 0) {
		greenCarY -= 10;
		consoleXY(greenCarX, greenCarY);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greenCarY <= 300) {
		greenCarY += 10;
		consoleXY(greenCarX, greenCarY);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greenCarX >= 0) {
		greenCarX -= 10;
		consoleXY(greenCarX, greenCarY);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greenCarX <= 725) {
		greenCarX += 10;
		consoleXY(greenCarX, greenCarY);
		uploadBackground();
		uploadgreencar();
	}
}

function consoleXY(x, y) {
	console.log(`X = ${x}, Y = ${y}`);
}
