<?PHP
/*
	Ratparty for Facemouth
	by Splith
	(Partially inspired by something similar at some other site that's now full of crap)
*/

//Holds all the images that will be cycled
$ImgArray = Array('http://i.telegraph.co.uk/multimedia/archive/01448/Sax_1448658i.jpg',
'http://i.telegraph.co.uk/multimedia/archive/01476/rat_1476764c.jpg', 
'http://www.mrjohnsons.co.uk/uploads/small/rat.jpg', 
'http://www.fischerenv.com/wp-content/uploads/2012/10/rats.jpg', 
'http://img.thesun.co.uk/aidemitlum/archive/00851/rat_280_851726a.jpg', 
'http://www.ryanandcalder.co.uk/uploadedfiles/image/Animal%20Photos/rat.jpg', 
'http://cdn.zmescience.com/wp-content/uploads/2013/05/rat-eye.jpg', 
'http://www.mrjohnsons.co.uk/uploads/small/rats2.jpg', 
'http://farm2.static.flickr.com/1332/1091960123_5bf912ca27.jpg', 
'http://upload.wikimedia.org/wikipedia/commons/6/62/Ratte-Vache.jpeg', 
'http://spoiled-rats.webs.com/CIMG7869%20copy.JPG', 
'http://newtechpest.com/wp-content/uploads/rat_flickr_asplosh.jpg', 
'http://scientopia.org/blogs/scicurious/files/2012/01/rats-together.jpg', 
'http://surrey-east.prokill.co.uk/sites/default/files/images/shared/brown_rat.jpg', 
'http://static.ddmcdn.com/gif/blogs/6a00d8341bf67c53ef015390e86b44970b-800wi.jpg', 
'http://www.likecool.com/Gear/Pic/Cutest%20Rats/Cutest-Rats-13.jpg', 
'http://www.channel4.com/media/images/Channel4/4homes/how-to/how-to-diy/rats/rat-l_A2.jpg', 
'http://members.madasafish.com/~cj_whitehound/Rats_Nest/Ship_Rats/artwork/Tobias_standing_up.jpg', 
'http://commentisfreewatch.files.wordpress.com/2011/02/rats1-9807.jpg', 
'http://i.dailymail.co.uk/i/pix/2012/10/18/article-0-03D191EE000005DC-768_634x392.jpg', 
'http://i.telegraph.co.uk/multimedia/archive/02242/Rat-in-a-Sewer_2242662b.jpg', 
'http://www.freeinfosociety.com/media/images/3608.jpg', 
'http://nymag.com/daily/intel/20070301rats.jpg', 
'http://www.lauraspetportraits.co.uk/blog-pics/sleeve-rats.jpg', 
'http://i.telegraph.co.uk/multimedia/archive/01374/Sniffer-rat_1374916c.jpg', 
'http://publius.mu.nu/archives/rats.jpg', 
'http://animal-world.com/encyclo/critters/rats/Images/FancyRat2WCRt_AcS136.jpg', 
'http://www.spiderbomb.com/blog/wp-content/uploads/2011/08/rat.jpg', 
'http://blogs.telegraph.co.uk/news/files/2009/07/rats1.gif', 
'http://www.bristol247.com/wp-content/uploads/2010/04/rats.jpg', 
'http://news.nationalgeographic.com/news/2009/07/photogalleries/blue-rats-food-dye-heals-pictures/images/primary/090727-01-blue-rat-after-dye_big.jpg', 
'http://www.mitie.com/media-library/services/specialist-services/pest-control/pest-photos/rats.jpg', 
'http://mentalfloss.com/sites/default/files/styles/article_640x430/public/rats_12.jpg', 
'http://holykaw.alltop.com/wp-content/uploads/2013/03/foto-rats.jpg', 
'http://www.happy-pixels.com/wp-content/uploads/2011/07/cute-rats-01.jpg');

//Variables needed... Essentially just the username to provide a picture for
$User = strtolower($_GET['Usr']);

//Only bother continuing if a username was actually provided
if (strlen($User) < 2)
{
	die();
}

//Check if the user image exists already
if (file_exists('./imgids/'.$User))
{
	//Yes, read it!
	$CurID = (int)file_get_contents('./imgids/'.$User);
}
else
{
	//Nope, create it
	$CurID = (int)file_get_contents('cur.id');
	$NewID = $CurID+1;
	if ($NewID >= count($ImgArray))
	{
		//Skip first, reserved for splith/delta ;)
		$NewID = 1;
	}

	//Update the ID for the next user (done quick so that con-current request don't all get the same image)
	//NB: SQL would be much better here but I couldn't be arsed to make a DB and table.
	$fp2 = fopen('cur.id', 'w');
	fwrite($fp2, $NewID);
	fclose($fp2);

	//And save the assigned ID for this user
	$fp = fopen('./imgids/'.$User, 'w');
	fwrite($fp, $CurID);
	fclose($fp);
}

//And redirect to the specified image
Header('Location: '.$ImgArray[$CurID]);
?>
