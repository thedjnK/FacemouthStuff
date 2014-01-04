/*
Matrix Text Effect using marquees for Facemouth...
Base code found off google.

Hours spent hacking it to JS and optimising efficiency by Splith for FM.

;-)
*/

if (typeof MRQPos != "string")
{
	var MRQPos = 'absolute';
	var MRQLeft = 15;
	var MRQl = 0;
	var MRQi = 0;
	var StartX = 0;
	var tooltip;
	var Mrq1;
	var MrqDowns = ['297', '268', '171', '203', '235', '146', '240', '135', '291', '289', '203', '289', '153', '233', '281', '261', '110', '293', '276', '268', '103', '240', '224', '293', '144', '166', '215', '168', '209', '292', '144', '267', '141', '136', '137', '244', '160'];
	StartX = $(window).width()/2-420;
	while (MRQl < 29*2)
	{
		MRQi = MRQl;
		if (MRQl > 29)
		{
			MRQi = MRQi-29;
		}
		tooltip = document.createElement("div");
		tooltip.style.position = MRQPos;
		tooltip.style.top = '0px';
		tooltip.style.left = (StartX+MRQLeft*MRQl) + 'px';
		Mrq1 = document.createElement("marquee");
		Mrq1.setAttribute("scrolldelay", MrqDowns[MRQi]);
		Mrq1.setAttribute("direction", 'down');
		Mrq1.setAttribute("height", '600');

		//Can be optimised more if the div bit was removed and stored in a global for each thing if I'm honest, but meh.
		if (MRQi == 0)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br><br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br><br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br><br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 1)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br><br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br><br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br><br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 2)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " &permil;<br> &pound;<br> &curren;<br><br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br><br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br><br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br><br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 3)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br><br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br><br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br><br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br><br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 4)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " &permil;<br><br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br><br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br><br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br><br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 5)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br><br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br><br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 6)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br><br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br><br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br><br> &omega;<br></div>";
		}
		else if (MRQi == 7)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " &permil;<br> &pound;<br> &curren;<br> &yen;<br><br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br><br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br><br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br><br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 8)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " &permil;<br> &pound;<br><br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br><br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br><br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br><br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 9)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "<br> &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br><br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br><br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 10)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br><br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br><br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br><br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br><br></div>";
		}
		else if (MRQi == 11)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br><br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br><br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br><br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br><br> &Omega;<br>&omega;<br> </div>";
		}
		else if (MRQi == 12)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br><br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br><br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br><br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br><br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 13)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br><br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br><br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br><br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br><br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 14)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br><br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br><br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 15)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br><br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br><br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br><br> &omega;<br></div>";
		}
		else if (MRQi == 16)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br><br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br><br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br><br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br><br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 17)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br><br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br><br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br><br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br><br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 18)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " <br> &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br><br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br><br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 19)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br><br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br><br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br><br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br><br></div>";
		}
		else if (MRQi == 20)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br><br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br><br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br><br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br><br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 21)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br><br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br><br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br><br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br><br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 22)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br><br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br><br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br><br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br><br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 23)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br><br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br><br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 24)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br><br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br><br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br><br> &omega;<br></div>";
		}
		else if (MRQi == 25)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br><br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br><br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br><br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br><br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 26)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br><br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br><br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br><br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br><br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 27)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + " <br> &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br><br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br><br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 28)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br><br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br><br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br><br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br><br></div>";
		}
		else if (MRQi == 29)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br><br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br><br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br><br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br><br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 29)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br><br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br><br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br><br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br><br> &Omega;<br> &omega;<br> 148</div>";
		}
		else if (MRQi == 29)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br><br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br><br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br><br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br><br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 29)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br><br>  &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br><br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br><br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 29)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br><br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br><br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br><br> &omega;<br></div>";
		}
		else if (MRQi == 29)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br> &curren;<br> &yen;<br><br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br><br> &Sigma;<br> &sigma;<br> &Tau;<br> &Phi;<br> &Omega;<br> &omega;<br> &#9679;<br> &AElig;<br> &ETH;<br><br> &Yacute;<br> &THORN;<br> <br> &xi;<br> &Xi;<br> <br> &Pi;<br> &pi;<br> &Sigma;<br> &sigma;<br> &Tau;<br><br> &Phi;<br> &Omega;<br> &omega;<br></div>";
		}
		else if (MRQi == 29)
		{
			Mrq1.innerHTML = '<div style="font-size:0.6em; color:#00CC00; text-shadow: #00CC00 0.1em 0.1em 0.2em">' + "  &permil;<br> &pound;<br><br> &curren;<br> &yen;<br> &AElig;<br> &ETH;<br> &Yacute;<br> &THORN;<br><br> &xi;<br> &Xi;<br><br> <br> &Pi;<br> &pi;<br> &Sigma;<br> </div>";
		}
		tooltip.appendChild(Mrq1);
		document.body.appendChild(tooltip);
		MRQl++;
	}
}
