var playlistFixer = {
    loadFixer: function() {
        console.log("Testing...");
        this.fixYoutubePlaylistPage();
    },

    isYoutubePlaylistPage: function() {
        href = window.location.href.toString();
        if (href.contains('youtube.com/playlist')) {
            return true;
        }
        return false;
    },

    fixYoutubePlaylistPage: function() {
        if (this.isYoutubePlaylistPage()) {
            console.log("Testing...");
        }
    }
};

// window.addEventListener('load', function() {
// }, false);
chrome.app.runtime.onLaunched.addListener(function() {
    console.log("Hlo");
    setTimeout(function() {
        playlistFixer.loadFixer();
    }, 2000);
});