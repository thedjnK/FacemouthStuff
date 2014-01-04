/*
Ratparty for Facemouth
by Splith

Javascript part, changes all user images (except the top right one) to have sources that redirect to the correct images via a PHP script
*/

var TmpStr;
$("img").each(function()
{
        if (this.src.indexOf('image.php') >= 0 && this.src.indexOf('/images/') >= 0)
        {
		if (typeof $(this).parent().attr('id') != 'string' || (typeof $(this).parent().attr('id') == 'string' && $(this).parent().attr('id') != 'header'))
		{
			//Lets make it a rat.
			TmpStr = this.src.substr((this.src.indexOf('/images/')+8));
			if (TmpStr.indexOf('_') >= 0)
			{
				//We have a username!
				TmpStr = TmpStr.substr(0, TmpStr.indexOf('_'));
			}
			else
			{
				//Annoying bug, no username, just send id...
				TmpStr = TmpStr.substr(0, TmpStr.indexOf('.'));
			}
			this.src = 'http://controlrods.failparty.co.uk/RATPARTY.php?Usr=' + TmpStr;
		}
	}
});
