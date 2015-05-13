chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.action == 'get-page') {
			var l = [];
			sendResponse(l);
			console.log('get');	
			return true;
		}
		else if (request.action == 'save-data') {
			for (var i = 0; i < request.data.length; ++i) {
				var data = request.data[i];

				chrome.storage.sync.set({
					"test" : data
				}, function() {
					console.log('save data completed');
				});
			}

			chrome.storage.sync.get(null, function (data) { console.info(data) });

			return true;
		}
		return false;
	});