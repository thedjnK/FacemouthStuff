/*
Facemouth 2014 effects thing
For the new year, ofc obv.
by Splith

You are free to yap, modify, talk, spank, harass, buy beers and even mop up after something or other blah blah mr 2010 HOH bear THE!
*/

//Colours to cycle
var cyclecolours = ['#FF0000','#00FFFF','#0000FF','#0000A0','#FF0080','#800080','#FFFF00','#00FF00','#FF8040'];

//Current colours for the text
var TCol1 = 0;
var TCol2 = 1;
var TCol3 = 2;
var TCol4 = 3;

//Timer... Wasn't really any need to make it variable but whatever
var ColChangeTmr;

//Change background
$('body').css({backgroundColor: 'grey'});

//Create a div for the text... Have used this code over and over and each time it's a copy and paste job, thanks again beady!
tooltip = document.createElement("div");
tooltip.style.position = 'absolute';
tooltip.style.top = ($("#logo").offset().top + 90) + 'px';
tooltip.style.left = ($("#logo").offset().left + 55) + 'px';
tooltip.setAttribute('id', 'div2014holder');

//Create the text elements
Mrq1 = document.createElement("a");
Mrq2 = document.createElement("a");
Mrq3 = document.createElement("a");
Mrq4 = document.createElement("a");
Mrq1.innerHTML = '2 ';
Mrq2.innerHTML = '0 ';
Mrq3.innerHTML = '1 ';
Mrq4.innerHTML = '4 ';
Mrq1.setAttribute('id', 'a2014_1');
Mrq2.setAttribute('id', 'a2014_2');
Mrq3.setAttribute('id', 'a2014_3');
Mrq4.setAttribute('id', 'a2014_4');

//Change z-index's so the text is visible over the logo
$("#logo").css('z-index', '50');
tooltip.style.zIndex = 90;
Mrq1.style.zIndex = 90;

//Append the text to the positioned div
tooltip.appendChild(Mrq1);
tooltip.appendChild(Mrq2);
tooltip.appendChild(Mrq3);
tooltip.appendChild(Mrq4);

//Add the div to the page
document.body.appendChild(tooltip);

//Now setup the CSS of the div and set the first colours, backgrounds, etc.
$("#div2014holder").css("font-style", "arial");
$("#div2014holder").css("font-size", "3em");
$("#a2014_1").css("color", cyclecolours[TCol1]);
$("#a2014_2").css("color", cyclecolours[TCol2]);
$("#a2014_3").css("color", cyclecolours[TCol3]);
$("#a2014_4").css("color", cyclecolours[TCol4]);
$("#reply-content").css("backgroundImage", 'url(http://greatwinenews.com/vineyard/uploads/2013/05/Close-up-of-explosion-of-champagne-bottle-cork2.jpg)');
$("#reply-content").css("background-size", '100% 100%');
$("#reply-content").css("background-repeat", 'no-repeat');
$("#reply-content").css("border-style", 'dashed');
$("#reply-content").css("border-color", '#555555');
$("#main").css("backgroundImage", 'url(http://media0.giphy.com/media/10d3NDzD40xb0s/giphy.gif)');
$("#main").css("background-size", '600px 600px');
$("#main").css("background-position", 'center center');
$("#main").css("background-repeat", 'no-repeat');

//Rotate header for a laugh
$("#header").css({
    "webkitTransform":"rotate(2deg)",
    "MozTransform":"rotate(2deg)",
    "msTransform":"rotate(2deg)",
    "OTransform":"rotate(2deg)",
    "transform":"rotate(2deg)"
});

//Rotate logo too for a laugh and push down a bit to counter the header rotation
$("#logo").css({
    "webkitTransform":"rotate(-5deg)",
    "MozTransform":"rotate(-5deg)",
    "msTransform":"rotate(-5deg)",
    "OTransform":"rotate(-5deg)",
    "transform":"rotate(-5deg)",
    "top":"5px"
});

//Party popper!
popper = document.createElement("img");
popper.style.position = 'absolute';
popper.style.width = (270) + 'px';
popper.style.top = (-15) + 'px';
popper.style.left = ($(document).width()/2-135) + 'px';
popper.setAttribute('src', 'http://i.imgur.com/RL6xeXD.png');
popper.setAttribute('id', 'popperimg');
document.body.appendChild(popper);

//Should have done this before finishing with the image but no worry! Rotate it to save space and make it fit in better
$("#popperimg").css({
    "webkitTransform":"rotate(15deg)",
    "MozTransform":"rotate(15deg)",
    "msTransform":"rotate(15deg)",
    "OTransform":"rotate(15deg)",
    "transform":"rotate(15deg)",
});

jQuery(document).ready(function()
{
	//Setup an interval
	ColChangeTmr = window.setInterval(changeTextCol, 120);
});

function changeTextCol()
{
	//Cycles through the colours
	TCol1++;
	TCol2++;
	TCol3++;
	TCol4++;
	if (TCol1 > cyclecolours.length)
	{
		TCol1 = 0;
	}
	if (TCol2 > cyclecolours.length)
	{
		TCol2 = 0;
	}
	if (TCol3 > cyclecolours.length)
	{
		TCol3 = 0;
	}
	if (TCol4 > cyclecolours.length)
	{
		TCol4 = 0;
	}
	$("#a2014_1").css("color", cyclecolours[TCol1]);
	$("#a2014_2").css("color", cyclecolours[TCol2]);
	$("#a2014_3").css("color", cyclecolours[TCol3]);
	$("#a2014_4").css("color", cyclecolours[TCol4]);

	//Not really sure why I bothered adding this, but it made me laugh a bit so I kept it in
//	$("#div2014holder").css('left', ($("#logo").offset().left + 55 + (TCol1-5)*2));
}
