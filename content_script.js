
// find all the 
saveAllVideos(document);

function saveAllVideos(doc)
{
	videos = [];

	// get all 'td' element videos in the playlist
	var video_title_eles = doc.getElementsByClassName('pl-video-title'); 
	for (var i = 0; i < video_title_eles.length; ++i) 
	{
		// get the current element in the iteration
		var video_title = video_title_eles[i];
		
		// console.log(video_title.innerText);
		
		video_object = {
			"title": "",
			"video-link": "",
			"owner": "",
			"owner-link": "",
			"playlist": "",
		};

		// get the current video's 'a' element
		var video_title_link_eles = video_title.getElementsByClassName('pl-video-title-link');
		if (video_title_link_eles.length > 0)
		{
			// select the one 'a' element
			var video_title_link = video_title_link_eles[0];

			// get the 'href' link for this 'a' element
			var video_link = video_title_link.getAttribute('href');

			// split the link by the query parameters
			var video_link_split = video_link.split('&');
			for (var j = 0; j < video_link_split.length; ++j)
			{
				// console.log(video_link_split[j]);
			}

			video_object["title"] = video_title_link.innerText;
			video_object["video-link"] = video_link_split[0];
			video_object["playlist"] = video_link_split[2];
		}

		var video_owner_eles = video_title.getElementsByClassName('pl-video-owner');
		if (video_owner_eles.length > 0)
		{
			var video_owner = video_owner_eles[0];

			var video_owner_link_ele = video_owner.getElementsByTagName('a');
			if (video_owner_link_ele.length > 0)
			{
				var video_owner_link = video_owner_link_ele[0];

				var owner_link = video_owner_link.getAttribute('href');

				video_object["owner"] = video_owner_link.innerText;
				video_object["owner-link"] = owner_link;
			}
		}
		
		videos.push(video_object);
	}

	console.log(JSON.stringify(videos));
}

