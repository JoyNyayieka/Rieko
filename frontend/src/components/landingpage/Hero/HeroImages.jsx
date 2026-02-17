import React, { useState } from 'react';
import { Box, Image } from '@mantine/core';
import { heroImageData, animationConfig } from './heroImgs';
import './HeroImages.css';

const HeroImages = () => {
  
  const ImageColumn = ({ images, direction, speed, columnIndex }) => {
    const duplicatedImages = [...images, ...images];

    return (
      <Box
        className="hero-image-column"
        
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: `${animationConfig.cardGap}px`,
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicatedImages.map((image, index) => (
          <Box
            key={`${image.id}-${index}`}
            className="hero-image-card"
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              flexShrink: 0,
              width: '100%',
              aspectRatio: '3/4',
              backgroundColor: '#e0e7ff',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              loading="lazy"
              fit="cover"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box
      className="hero-images-container"
      style={{
        display: 'flex',
        position: 'absolute',
        right: 0,
        top: '7.5%',
        height: '100%',
        width: '50%',
        overflow: 'hidden',
      }}
      sx={{
        '@media (max-width: 768px)': {
          display: 'none',
        },
      }}
    >
      <Box
        style={{
          display: 'flex',
          gap: `${animationConfig.cardGap}px`,
          height: '100%',
          width: '100%',
          padding: '20px 20px 20px 0',
        }}
      >
        {/* Column 1 - Scrolls down */}
        <Box style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <ImageColumn
            images={heroImageData.column1}
            direction="down"
            speed={animationConfig.column1Speed}
            columnIndex={1}
          />
        </Box>

        {/* Column 2 - Scrolls up */}
        <Box style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <ImageColumn
            images={heroImageData.column2}
            direction="up"
            speed={animationConfig.column2Speed}
            columnIndex={2}
          />
        </Box>

        {/* Column 3 - Scrolls down */}
        <Box style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <ImageColumn
            images={heroImageData.column3}
            direction="down"
            speed={animationConfig.column3Speed}
            columnIndex={3}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroImages;