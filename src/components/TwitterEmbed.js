import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TwitterEmbed = ({ tweetId }) => (
  <div
    style={{
      marginBottom: '32px',
    }}
  >
    <TwitterTweetEmbed tweetId={tweetId} options={{ align: 'center' }} />
  </div>
);

export default TwitterEmbed;
