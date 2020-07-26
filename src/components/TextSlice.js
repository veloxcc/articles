import React from 'react';
import { RichText } from 'prismic-reactjs';

const TextSlice = ({ rawText }) => (
  <div
    style={{
      marginBottom: '32px',
    }}
  >
    <RichText render={rawText} />
  </div>
);

export default TextSlice;
