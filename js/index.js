function onYouTubeIframeAPIReady() {
    var recomendado;
    var estreno;
    var visto;
    var visto2;
    recomendado = new YT.Player('recomendado', {
      videoId: 'KbU50SdL8zA', // YouTube Video ID
      width: 560,               // Player width (in px)
      height: 315,              // Player height (in px)
      playerVars: {
        autoplay: 1,        // Auto-play the video on load
        controls: 1,        // Show pause/play buttons in player
        showinfo: 0,        // Hide the video title
        modestbranding: 0,  // Hide the Youtube Logo
        loop: 1,            // Run the video in a loop
        fs: 0,              // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 1         // Hide video controls when playing
      },
      events: {
        onReady: function(e) {
          e.target.mute();
        }
      }
    });

    estreno = new YT.Player('estreno', {
        videoId: 'BqnAeUoqFAM', // YouTube Video ID
        width: 560,               // Player width (in px)
        height: 315,              // Player height (in px)
        playerVars: {
          autoplay: 0,        // Auto-play the video on load
          controls: 1,        // Show pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 0,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          fs: 0,              // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 1         // Hide video controls when playing
        },
        events: {
          onReady: function(e) {

          }
        }
      });

      visto = new YT.Player('visto', {
        videoId: 'Uibt8QRqn88', // YouTube Video ID
        width: 560,               // Player width (in px)
        height: 315,              // Player height (in px)
        playerVars: {
          autoplay: 0,        // Auto-play the video on load
          controls: 1,        // Show pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 0,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          fs: 0,              // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 1         // Hide video controls when playing
        },
        events: {
          onReady: function(e) {

          }
        }
      });

      visto2 = new YT.Player('visto2', {
        videoId: '5uYKdlwS67c', // YouTube Video ID
        width: 560,               // Player width (in px)
        height: 315,              // Player height (in px)
        playerVars: {
          autoplay: 0,        // Auto-play the video on load
          controls: 1,        // Show pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 0,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          fs: 0,              // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 1         // Hide video controls when playing
        },
        events: {
          onReady: function(e) {

          }
        }
      });
}
