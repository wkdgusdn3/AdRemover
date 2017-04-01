// script injection
$(document).ready(function() {
	var url = window.location.href;

	if(url.includes('youtube')) {
		var script = "<script> \
		setInterval(function() { \
			var curPlayer = document.getElementById('movie_player'); \
			if(curPlayer.getAdState() == 1) { \
				location.reload(); \
			} \
		}, 500); \
		</script>";
	}
	if(url.includes('tv.naver')) {
		var script = "<script> \
		setInterval(function() { \
			if(rmcPlayer.getPlayingVideoType() == 'ad') { \
				rmcPlayer.currentTime(1000); \
			} \
		}, 500); \
		</script>";
	}
	$('body').prepend(script);
});