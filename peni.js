/*
Facemouth Peni Script...
...by splith...

:|
*/

//Images to use... Yes I did make them all myself :$
var PenImgs = new Array(
	'http://i.imgur.com/K2ELnqq.png',
	'http://i.imgur.com/GYuoBWs.png',
	'http://i.imgur.com/Rnzw2XD.png',
	'http://i.imgur.com/ytlP7sF.png',
	'http://i.imgur.com/DI4bOCZ.png'
);

//Create place button
var Btn = document.createElement("button");
Btn.setAttribute("onclick", "DoPen();");
Btn.style.position = "fixed";
Btn.style.top = "20px";
Btn.style.left = "10px";
Btn.style.height = "30px";
Btn.style.zIndex = "300";
Btn.innerHTML = "Add Peni!";
document.body.appendChild(Btn);

//Variables
var IsPen = false;
var FollowPen = false;
var PenTmr;
var ThisPen;

function DoPen()
{
	if (IsPen == false && FollowPen == false)
	{
		//Create a new image if there isn't one being place already
		ThisPen = document.createElement("img");
		ThisPen.setAttribute("src", PenImgs[Math.floor(Math.random()*4.9)]);
		ThisPen.style.position = "absolute";
		ThisPen.style.top = "20px";
		ThisPen.style.left = "20px";
		ThisPen.style.zIndex = "280";
		document.body.appendChild(ThisPen);
		FollowPen = true;
		PenTmr = setTimeout(AllowPlace, 700);
	}
}

//Moves the image
$("body").mousemove(function(e)
{
	if (FollowPen == true)
	{
		ThisPen.style.left = (e.pageX-5) + "px";
		ThisPen.style.top = (e.pageY-5) + "px";
	}
})

//Places the image
$("body").click(function()
{
	if (FollowPen == true && IsPen == true)
	{
		FollowPen = false;
		IsPen = false;
		clearInterval(PenTmr);
	}
});

//Allows the image to be placed
function AllowPlace()
{
	IsPen = true;
}
