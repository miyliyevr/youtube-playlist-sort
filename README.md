# youtube-playlist-sort
Apps Script (Google) to sort playlist in Youtube by durations of videos in that playlist(Ascending order).

If you have a playlist of youtube videos in your Youtube account and want to sort them by duration (ASC) this script is for you.

To be able to run the script 
1. go to (you may need to create/have a google developer or just gmail account)
https://script.google.com/
2. Create a project
3. Paste the code to the newly opened .gs file
4. You may need to connect Youtube API, for that click '+' next to the "Services" and add Youtube API.
5. Replace the 'PLAYLIST_ID' with the ID of your Youtube playlist (look for it into Youtube URL: https://www.youtube.com/watch?v=VIDEO_ID&list=PLAYLIST_ID&index=INDEX_OF_YOUR_CURRENT_VIDEO)
6. Click 'Run' and wait until it finihes the execution
7. Go to YOutube and check if your provided playlist now have videos sorted ASC by the duration of each video, so that shortest videos are at the beginning and the longest ones at the very end.
