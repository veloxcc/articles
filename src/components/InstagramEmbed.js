import React from 'react';
import InstagramEmbedBase from 'react-instagram-embed';

const InstagramEmbed = ({ postUrl }) => (
  <div
    style={{
      margin: '0 auto 32px',
      maxWidth: '550px',
    }}
  >
    <InstagramEmbedBase url={postUrl} hideCaption />
  </div>
);

export default InstagramEmbed;
