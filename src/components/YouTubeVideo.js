import React from 'react';
import AspectRatio from 'react-aspect-ratio';

import 'react-aspect-ratio/aspect-ratio.css';

const origin = typeof window !== 'undefined' && window.location.origin;

const YouTubeVideo = ({ videoId }) => (
  <div
    style={{
      marginBottom: '32px',
    }}
  >
    <AspectRatio ratio="16/9">
      <iframe
        style={{
          width: '100%',
          height: '100%',
        }}
        id={`ytplayer-${videoId}`}
        title="YouTube Player"
        type="text/html"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&origin=${origin}`}
        frameBorder="0"
      ></iframe>
    </AspectRatio>
  </div>
);

export default YouTubeVideo;
