find(document);

function find(doc)
{
	var video_title_eles = doc.getElementsByClassName('pl-video-title'); 
	for (var i = 0; i < video_title_eles.length; ++i) {
		var video_title = video_title_eles[i];
		console.log(video_title.innerText);
		
		var video_title_link_eles = video_title.getElementsByClassName('pl-video-title-link');
		if (video_title_link_eles.length > 0)
		{
			var video_title_link = video_title_link_eles[0];

			var raw_link = video_title_link.getAttribute('href');
			console.log(raw_link);
		}
	}
}

