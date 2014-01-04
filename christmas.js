/*
Facemouth Christmas... 'Thing'
By Splith, 2013
Version 0.9
Uses KineticJS and some small things from others

You are free to use, modify, change, distribute or otherwise do whatever you want with this script or any parts of it, though it would be nice to credit/mention if you do so! :)

n.b. 4/1/13: Noticed I never bothered changing the names of things... Means the codes a bit less neat than it should be and some stuff is commented out, as you can see I played with a lot of things that didn't make it to the final version ;)
*/

//Create GL container from specific post ID
var GLcontainer = document.createElement("div");
GLcontainer.setAttribute("id", 'containerGL');
el('mytestcanvas').parentNode.appendChild(GLcontainer);

//Function nicked from gmail
function el(id)
{
	if (document.getElementById)
	{
		return document.getElementById(id);
	}
	else if (window[id])
	{
		return window[id];
	}
	return null;
}

//Create canvas object
var sw = 660; //Width
var sh = 380; //height
var stage = new Kinetic.Stage({
	container: 'containerGL',
	width: sw,
	height: sh
});

var layer = new Kinetic.Layer({
	y: -30 //Offset
});

//Heading
var simpleText = new Kinetic.Text({
	x: 20,
	y: 30,
	text: 'Happy Christmas FM!',
	fontSize: 70,
	fontFamily: 'Calibri',
	stroke: 'black',
	strokeWidth: 2
      });

//Shoutouts
var shoutText = new Kinetic.Text({
	x: 400,
	y: 260,
	text: 'Happy Xmas & New Year to:\r\n\r\nAuspicious, Corkenee, Karma, Peter,\r\nSean, VegasVolt, Nicola, Evan, Kevin,\r\nHolocene, Sakai, Percy, Alan, Leon\r\nMark, Jay, Fink, Ner, Kindalikeirony, Vic,\r\nFocker, Carl, Lisa, Southernbelle,\r\nKathykane, SuperficialC, M_Fox, Laura,\r\nTrustBaby, Stitch, Chantal, Hush,\r\nKiya, DJepp, Sibs, Mirelle, Jase',
	fontSize: 14,
	fontFamily: 'Calibri',
	fill: 'black',
	align: 'center'
      });

//Images
var yoda;
var yoda2;
var yoda3;
var yoda4;
function tstsetup()
{
//Avatar images
yoda = new Kinetic.Image({
                        x: 220+picW/2,
                        y: 220+picH/2,
//                        image: imageObj,
                        width: picW,
                        height: picH,
offset: [picW/2, picH/2]
});

//Background frame
yoda2 = new Kinetic.Image({
                        x: 220-20,
                        y: 220-20,
                        image: Imgs[0],
                        width: picW+40,
                        height: picH+40
});

//Logos
yoda3 = new Kinetic.Image({
			x: 420,
			y: 140,
			image: Imgs[1],
			width: picW+40,
			height: picH-60,
		});

//Lens flare
yoda4 = new Kinetic.Image({
			x: 70+45,
			y: 140+45,
			image: Imgs[5],
			width: 90,
			height: 90,
opacity:0.0,
offset:[45, 45]
		});

		//Add to layer
                layer.add(yoda);
                layer.add(yoda2);
                layer.add(yoda3);
                layer.add(yoda4);

		//Setup background
		yoda2.moveToBottom();
		yoda2.draw();
		imageFlash.setOpacity(1.0);
		imageFlash.draw();

		//Setup logo
		yoda3.moveToBottom();
		yoda3.draw();
		yoda4.draw();
}

function showImgTimer()
{
	//Rotates image and makes it visible
	yoda.rotateDeg(Math.round(Math.random()*18-9) - yoda.getRotationDeg());
	yoda.setOpacity(1);
	yoda2.setOpacity(1);
	imageFlash.draw();
}

//Variables for the avatar images
var picW = 140; //Width of images (avatars)
var picH = 180; //Height of images (avatars)
var ImgURL = 'http://www.facemouth.co.uk/image.php?width=' + picW + '&height=' + picH + '&image=/images/'; //Base URL for avatar images
var ImgList = ['http://i.imgur.com/uWsLMhK.png', 'http://oi46.tinypic.com/55k0lv.jpg', 'http://oi50.tinypic.com/2qn5qvt.jpg', 'http://oi47.tinypic.com/2w746kg.jpg', 'http://www.facemouth.co.uk/images/logo/logo.png', 'http://i.imgur.com/4XkRWye.png', 'Cromwell_1553492797.jpg', 'Lemon_155558096.jpg', 'Vonny_863298440.jpg', 'Vonny_1157415503.jpg', 'podder19_1066264667.jpg', 'Jay_525744465.jpg', 'Corkenee_304308306.png', 'Splith_1452975999.png', 'Splith_832130932.png', 'tom-3v3-666_833320920.jpg', 'bannednun_1529477532.jpg', 'Walv_1809809144.jpg', 'cannyannie_302333661.jpg', 'OhTartarSauce_1013170819.jpg', 'leon_59543868.jpeg', 'missxbxmundane_1541523232.jpg', 'focker_1551524514.png', 'derp_171879534.png', 'vegasvolt_373505964.png', 'kindalikeirony_1307828395.jpg', 'fink_1695939161.jpg', 'Alan_1804638606.jpg', '514875850.jpg', 'kevwithslipperson_1754176368.jpg', 'f1ngerbang_1610531393.png']; //Images to download (first six are full URLs and not relative)
var Imgs = {}; //Holds all downloaded image data
var ImgsFinished = 0; //Set to 1 when images have been downloaded

//Load the images
function LoadImages()
{
	var loadedImages = 0;
	var numImages = 0;
	for (var src in ImgList)
	{
		numImages++;
	}
	for (var src in ImgList)
	{
		Imgs[src] = new Image();
		Imgs[src].onload = function()
		{
			loadedImages = loadedImages +1;
			if(loadedImages >= numImages)
			{
				//Finished loading!
				tstsetup();
				ImgsFinished = 1;
			}
		};

		if (src < 6)
		{
			Imgs[src].src = ImgList[src];
		}
		else
		{
			Imgs[src].src = ImgURL + ImgList[src];
		}
	}
}
LoadImages();
var CurImg = 6; //First 6 images (0..5) are not avatars

//Wavy sin/tan shoutout text
var sinText = new Kinetic.Text({
	x: 300,
	y: 150,
	text: '',
	fontSize: 30,
	fontFamily: 'Calibri',
	stroke: 'black',
	strokeWidth: 2
      });

//Flash-effect for images
	var imageFlash = new Kinetic.Blob({
		x: 220,
		y: 220,
		points: [-20, -20, -20, picH+20, picW+20, picH+20, picW+20, -20],
		tension: 0,
		fill: 'white',
		strokeWidth: 0,
		opacity: 0.9
	});

//Tree parts
      var treeTri1 = new Kinetic.Blob({
	x: 20,
	y: 150,
	points: [0, 60, 160, 60, 80, 0],
	tension: 0,
	stroke: 'black',
	fill: 'green',
	strokeWidth: 5
      });

      var treeTri2 = new Kinetic.Blob({
	x: 20,
	y: 200,
	points: [0, 60, 160, 60, 80, 0],
	tension: 0,
	stroke: 'black',
	fill: 'green',
	strokeWidth: 5
      });

      var treeTri3 = new Kinetic.Blob({
	x: 20,
	y: 250,
	points: [0, 60, 160, 60, 80, 0],
	tension: 0,
	stroke: 'black',
	fill: 'green',
	strokeWidth: 5
      });

      var treeRoot = new Kinetic.Blob({
	x: 20,
	y: 310,
	points: [60, 60, 100, 60, 100, 0, 60, 0],
	tension: 0,
	stroke: 'black',
	fill: 'brown',
	strokeWidth: 5
      });

      var treeBucket = new Kinetic.Blob({
	x: 20,
	y: 350,
	points: [45, 0, 115, 0, 100, 56, 60, 56],
	tension: 0,
	stroke: 'black',
	fill: 'blue',
	strokeWidth: 5
      });

//Tree decorations
	var treeDec1p1 = new Kinetic.Blob({
		x: 40,
		y: 210,
		points: [0,0, 6,0, 6,10, 0,10],
		tension: 0,
		fill: 'red',
		stroke:'black',
		strokeWidth: 2
	});

	var treeDec1p2 = new Kinetic.Circle({
		x: 40 + 3,
		y: 210 + 14,
		radius: 6,
		fill: 'red',
		stroke: 'black',
		strokeWidth: 2
	});

var treeDec2p1 = treeDec1p1.clone();
var treeDec2p2 = treeDec1p2.clone();
var treeDec3p1 = treeDec1p1.clone();
var treeDec3p2 = treeDec1p2.clone();
var treeDec4p1 = treeDec1p1.clone();
var treeDec4p2 = treeDec1p2.clone();
var treeDec5p1 = treeDec1p1.clone();
var treeDec5p2 = treeDec1p2.clone();
var treeDec6p1 = treeDec1p1.clone();
var treeDec6p2 = treeDec1p2.clone();
var treeDec7p1 = treeDec1p1.clone();
var treeDec7p2 = treeDec1p2.clone();
var treeDec8p1 = treeDec1p1.clone();
var treeDec8p2 = treeDec1p2.clone();
treeDec2p1.setX(150);
treeDec2p2.setX(150+3);
treeDec3p1.setX(70);
treeDec3p2.setX(70+3);
treeDec3p1.setY(270);
treeDec3p2.setY(270+14);
treeDec4p1.setX(95);
treeDec4p2.setX(95+3);
treeDec4p1.setY(190);
treeDec4p2.setY(190+14);
treeDec5p1.setX(75);
treeDec5p2.setX(75+3);
treeDec5p1.setY(300);
treeDec5p2.setY(300+14);
treeDec6p1.setX(118);
treeDec6p2.setX(118+3);
treeDec6p1.setY(280);
treeDec6p2.setY(280+14);
treeDec7p1.setX(90);
treeDec7p2.setX(90+3);
treeDec7p1.setY(240);
treeDec7p2.setY(240+14);
treeDec8p1.setX(160);
treeDec8p2.setX(160+3);
treeDec8p1.setY(260);
treeDec8p2.setY(260+14);
//Colour!
treeDec2p1.setFill('blue');
treeDec2p2.setFill('blue');
treeDec3p1.setFill('yellow');
treeDec3p2.setFill('yellow');
treeDec4p1.setFill('pink');
treeDec4p2.setFill('pink');
treeDec5p1.setFill('silver');
treeDec5p2.setFill('silver');
treeDec6p1.setFill('grey');
treeDec6p2.setFill('grey');
treeDec7p1.setFill('orange');
treeDec7p2.setFill('orange');
treeDec8p1.setFill('purple');
treeDec8p2.setFill('purple');

//Add objects to the layer
      layer.add(treeTri3)
      .add(treeTri2)
      .add(treeTri1)
      .add(treeRoot)
      .add(treeBucket)
      .add(simpleText)
      .add(shoutText)
      .add(sinText)
      .add(treeDec1p1)
      .add(treeDec1p2)
      .add(treeDec2p1)
      .add(treeDec2p2)
      .add(treeDec3p1)
      .add(treeDec3p2)
      .add(treeDec4p1)
      .add(treeDec4p2)
      .add(treeDec5p1)
      .add(treeDec5p2)
      .add(treeDec6p1)
      .add(treeDec6p2)
      .add(treeDec7p1)
      .add(treeDec7p2)
      .add(treeDec8p1)
      .add(treeDec8p2)
      .add(imageFlash);

//Add the layer to the stage
      stage.add(layer);

//Rename this later you mug
function LolWut()
{
	//Change fill and outline colours
	simpleText.setFill((getRandomColour()));
	simpleText.setStroke((getRandomColour()));
//stage.draw();
	//Redraw text
	simpleText.draw();
}

//Variables for sin text
var t = 70; //Initial position
var sctext = "Extra Special Greets: Tom Von Annie Liz DCB West Cpt.Snow Christopher Lemon Walv Derp Sarge Eskimo Podder Emily Mundane"; //Text
var textcol = new Array(); //Outline colours
//var textcol2 = new Array(); //Fill colours
var spacing = 22; //Spacing (Dynamic spacing would be better but it'd be too much effort)
var mode = 0; //Mode (0 = sin, 1 = tan, 2 = negative tan)

var lolnou = 0;

//Generate colours, modified from something found on S.O.
function makeid()
{
	var text = "";
	var possible = "ABCDEF0123456789";
	for(var i=0;i<6;i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

//Setup arrays
function doSinSetup()
{
	var i = 0;
	while (i < sctext.length)
	{
		textcol[i] = ("#" + makeid());
//		textcol2[i] = ("#" + makeid());
		i++;
	}
}

//Setup arrays
doSinSetup();

//Moves and draws the text
function testSin()
{
	//Local counter, increment t (x-position) and refresh the stage
	var i = 0;
	t = t-0.14;
	stage.draw();
	var Drawn = 0;

	//Draw out the text!
	while (i < sctext.length)
	{
		//Only bother to print out chars that are inside the canvas
		if (i*spacing+t*10 < 0-1.5*spacing)
		{
			//Not visible, ignore
		}
		else if (i*spacing+t*10 < sw)
		{
			//Draw char!
			Drawn++;
			sinText.setText(sctext[i]);
			sinText.setX(i*spacing+t*10);
			if (mode == 1)
			{
				//Upwards
				sinText.setY(110+1.2*Math.tan(t+i*2)*10);
			}
			else if (mode == 2)
			{
				//Sideways-S
				if (i*spacing+t*10 > 300)
				{
//					sinText.setY(110+1.2*Math.pow(2, -(60-(t+i*2)))*10);
					sinText.setY(110+1.2*Math.pow(2, i*spacing+t*10-640)*10);
				}
				else
				{
					sinText.setY(110+1.2*-Math.pow(2, -(i*spacing+t*10)+20)*10);
				}
			}
			else if (mode == 3)
			{
				//Downwards
				sinText.setY(110+1.2*Math.tan(-(t+i*2))*10);
			}
			else
			{
				//Wave
				sinText.setY(110+1.2*Math.sin(t+i*2)*10);
			}
			sinText.setStroke(textcol[i]);
//			sinText.setFill(textcol[i]);
			sinText.draw();
		}
		else
		{
			//Why recheck other characters when we're outside the frame!
			break;
		}
		++i;
	}
	//Clear the text to stop overlapping
	sinText.setText('');
	if (Drawn == 0 && t < 0)
	{
		//Finished drawing.
		t = 70;
		if (Finished == 0)
		{
			sctext = "~~ Still here? ;) Wait for it! ♥ xx ~~";
			Finished++;
		}
		else if (Finished == 1)
		{
			sctext = "Extra Special Greets: Tom Von Annie Liz DCB West Cpt.Snow Christopher Lemon Walv Derp Sarge Eskimo Podder Emily"; //Text
			Finished++;
			setTimeout(DoCode, 50);
		}
	}
}
var Finished = 0;

//Change the mode of the text
function changeSinMode()
{
	mode = mode +1;
	if (mode > 3)
	{
		mode = 0;
	}
}

//Changes image
var CurLogo = 1;
function changeImage()
{
	//Due to either a bug on FM, or with firefox or with how the script is loaded, this event must always be triggered even when it is not read, so only proceed if the flag is set
	if (ImgsFinished == 1)
	{
		//Hide avatar for transition
		yoda.setOpacity(0);
		yoda2.setOpacity(0);
		yoda.setImage(Imgs[CurImg]);
		yoda.draw();

		//Change logo
		yoda3.setImage(Imgs[CurLogo]);
		yoda3.draw();

		//Additional avatar stuff
		yoda.setZIndex(2);
	        imageFlash.setOpacity(1);
		imageFlash.draw();
	        BrightnessIntTimer = window.setInterval(changeImageBrightness, 100);
		window.setTimeout(showImgTimer, 20)

		//Increment counters
		CurImg++;
		CurLogo++;
		if (CurImg >= ImgList.length)
		{
			CurImg = 6;
		}
		if (CurLogo >= 5)
		{
			CurLogo = 1;
		}
	}
}

var BrightnessIntTimer;

//Fades images in
function changeImageBrightness()
{
	if (imageFlash.getOpacity() > 0.1)
	{
		imageFlash.setOpacity(imageFlash.getOpacity()-0.1);
	}
	else
	{
		//Finished!
		window.clearInterval(BrightnessIntTimer);
	}
}

//Setup script to auto-fire events on load
jQuery(document).ready(function()
{
	window.setInterval(LolWut, 700);
	window.setInterval(testSin, 25);
	window.setInterval(changeSinMode, 8000);
	window.setInterval(changeImage, 4000);
	window.setInterval(DoLensFlare, 5000);
});

//Courtesy of z0r
var colours = ['#FF0000','#00FFFF','#0000FF','#0000A0','#FF0080','#800080','#FFFF00','#00FF00','#FF8040']; 

function getRandomColour()
{
	return colours[Math.round(Math.random() * 8)];
}

function MoveLensFlare()
{
	yoda4.rotateDeg(5);
}

function ShowLensFlare()
{
	if (yoda4.getOpacity() < 0.9)
	{
		yoda4.setOpacity(yoda4.getOpacity()+0.1);
	}
	else
	{
		window.clearInterval(LensFlareSHTimer);
		window.setTimeout(EnableLensFlareHider, 70);
	}
}

function EnableLensFlareHider()
{
	LensFlareSHTimer = window.setInterval(HideLensFlare, 15);
}

function HideLensFlare()
{
	if (yoda4.getOpacity() > 0.1)
	{
		yoda4.setOpacity(yoda4.getOpacity()-0.1);
	}
	else
	{
		window.clearInterval(LensFlareSHTimer);
		window.clearInterval(LensFlareRotTimer);
	}
}

function DoLensFlare()
{
	//Randomly pick which object it'll appear over
	var Obj = Math.floor(Math.random()*3.9);
	var PosX, PosY;
	if (Obj == 0 || Obj == 1)
	{
		Obj = Math.floor(Math.random()*4.9);
		if (Obj == 0)
		{
			//Tree top
			PosX = 20+Math.floor(Math.random()*160);
			PosY = 150+74+Math.floor(Math.random()*8);
		}
		else if (Obj == 1)
		{
			//Tree middle
			PosX = 20+Math.floor(Math.random()*160);
			PosY = 250+74+Math.floor(Math.random()*8);
		}
		else if (Obj == 2)
		{
			//Tree bottom
			PosX = 20+Math.floor(Math.random()*160);
			PosY = 350+74+Math.floor(Math.random()*8);
		}
		else if (Obj == 3)
		{
			//Tree root
			PosX = 20+60+Math.floor(Math.random()*40);
			PosY = 310+Math.floor(Math.random()*60);
		}
		else if (Obj == 4)
		{
			//Tree bucket
			PosX = 20+60+Math.floor(Math.random()*40);
			PosY = 350+Math.floor(Math.random()*56);
		}
	}
	else if (Obj == 2)
	{
		//FM logo
		PosX = 420+Math.floor(Math.random()*180);
		PosY = 150+Math.floor(Math.random()*100);
	}
	else if (Obj == 3)
	{
		//Avatar
		PosX = 210+Math.floor(Math.random()*160);
		PosY = 210+Math.floor(Math.random()*200);
	}
	yoda4.setX(PosX);
	yoda4.setY(PosY);
yoda4.moveToTop();
	LensFlareRotTimer = window.setInterval(MoveLensFlare, 40);
	LensFlareSHTimer = window.setInterval(ShowLensFlare, 15);
}

var LensFlareSHTimer;
var LensFlareRotTimer;

function DoCode()
{
	konami['code'](50);
}
