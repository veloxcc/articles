import React from 'react';
import AspectRatio from 'react-aspect-ratio';
import { useMediaQuery } from 'react-responsive';

const BannerWithCaptionSlice = ({ sizes }) => {
  const isSmall = useMediaQuery({ maxWidth: 600 });

  const ratios = {
    small: '3/2',
    medium: '16/9',
  };

  const size = isSmall ? 'small' : 'medium';

  return (
    <div
      style={{
        marginBottom: '32px',
      }}
    >
      <AspectRatio
        ratio={ratios[size]}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#CCC',
        }}
      >
        <picture>
          <source
            style={{ width: '100%' }}
            srcSet={sizes.crop_3x2.url}
            media="(max-width: 600px)"
            alt={sizes.crop_3x2.alt}
          />
          <source
            style={{ width: '100%' }}
            srcSet={sizes.crop_16x9.url}
            media="(min-width: 601px)"
            alt={sizes.crop_16x9.alt}
          />
          <img
            style={{ width: '100%' }}
            src={sizes.crop_3x2.url}
            alt={sizes.crop_3x2.alt}
          />
        </picture>
      </AspectRatio>
    </div>
  );
};

export default BannerWithCaptionSlice;
