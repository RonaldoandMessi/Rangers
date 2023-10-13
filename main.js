var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 100;
block_image_height = 300;

var block_image_object= "";

	function new_image(get_image){
		fabric.Image.fromURL(get_image,function(Img){
			block_image_object=Img;
			block_image_object.scaleToWidth(block_image_width);
			block_image_object.scaleToHeight(block_image_height);
			block_image_object.set({
				top:block_y,
				left:block_x
			});
			canvas.add(block_image_object);
		});
	}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '83')
	{
		block_image_width;
		block_image_height;
		block_x=300;
		new_image('spider main.jpg');
		console.log("S");
	}
	if(keyPressed == '79')
	{
		block_x = 270;
		new_image('optimus prime.jpg');
		console.log("O");
	}
	
	if(keyPressed == '66')
	{
		block_x =10;
		new_image('bumblebee.jpg');
		console.log("B");
	}
	if(keyPressed == '71')
	{
		block_x = 670;
		new_image('grimlock.jpg');
		console.log("G");
	}
	if(keyPressed == '67')
	{
		block_x = 900;
		new_image('carnom.jpg');
		console.log("C");
	}
	
}
