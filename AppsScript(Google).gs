function sortPlaylistVideosByDuration() {
  var playlistId = 'PLAYLIST_ID';
  var nextPageToken = '';
  var videos = [];

  do {
    var response = YouTube.PlaylistItems.list('contentDetails', {
      playlistId: playlistId,
      maxResults: 50,
      pageToken: nextPageToken
    });

    for (var i = 0; i < response.items.length; i++) {
      var videoId = response.items[i].contentDetails.videoId;
      var videoResponse = YouTube.Videos.list('contentDetails', {id: videoId});

      if (videoResponse.items.length > 0) {
        var duration = convertDurationToSeconds(videoResponse.items[0].contentDetails.duration);
        videos.push({id: videoId, duration: duration, playlistItemId: response.items[i].id});
      }
    }

    nextPageToken = response.nextPageToken;
  } while (nextPageToken);

  videos.sort(function(a, b) { return a.duration - b.duration; });

  for (var j = 0; j < videos.length; j++) {
    var playlistItem = YouTube.PlaylistItems.list('snippet', {
      id: videos[j].playlistItemId,
      maxResults: 1
    }).items[0];

    playlistItem.snippet.position = j;
    YouTube.PlaylistItems.update(playlistItem, 'snippet');
  }
}

function convertDurationToSeconds(duration) {
  var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  var hours = (parseInt(match[1]) || 0);
  var minutes = (parseInt(match[2]) || 0);
  var seconds = (parseInt(match[3]) || 0);
  return hours * 3600 + minutes * 60 + seconds;
}
