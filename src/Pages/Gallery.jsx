import React, { useState, useEffect } from 'react';
import NavigationBar from '../Components/NavigationBar';
import { DndContext, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Modal } from '@mui/material';
import './Gallery.css';

// Sample images - replace with your actual images
const images = [
  { id: 1, url: '/img/lorem-4961251_1280.jpg', width: 300, height: 200 },
  { id: 2, url: '/img/lorem-4920219_1280.jpg', width: 250, height: 300 },
  { id: 3, url: '/img/lorem-4995945_1280.jpg', width: 280, height: 250 },
  { id: 4, url: '/img/lorem-4951629_1280.jpg', width: 320, height: 220 },
  { id: 5, url: '/img/lorem-4961138_1280.jpg', width: 270, height: 270 },
  { id: 6, url: '/img/lorem-4992299_1280.jpg', width: 290, height: 240 },
  { id: 7, url: '/img/lorem-4920209_1280.jpg', width: 310, height: 280 },
  { id: 8, url: '/img/lorem-4977985_1280.jpg', width: 260, height: 260 },
];

// Skeleton component for loading state
function ImageSkeleton({ width, height, position }) {
  const isMobile = window.innerWidth <= 768;
  const scale = isMobile ? 0.7 : 1;

  const style = {
    width: width * scale,
    height: height * scale,
    position: 'absolute',
    left: position.x,
    top: position.y,
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    animation: 'pulse 1.5s ease-in-out infinite',
  };

  return <div style={style} className="image-skeleton" />;
}

function DraggableImage({ id, url, width, height, position, onImageClick, onImageLoad, isLoaded }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const isMobile = window.innerWidth <= 768;
  const scale = isMobile ? 0.7 : 1;

  const style = {
    width: width * scale,
    height: height * scale,
    position: 'absolute',
    left: position.x,
    top: position.y,
    transform: CSS.Translate.toString(transform),
    cursor: 'move',
    zIndex: transform ? 1000 : 1,
    opacity: isLoaded ? 1 : 0, // Hide until loaded
  };

  const handleClick = (e) => {
    if (!transform) {
      onImageClick(url);
    }
  };

  const handleLoad = () => {
    onImageLoad(id);
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <img
        src={url}
        alt={`Creation ${id}`}
        onClick={handleClick}
        onLoad={handleLoad}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          cursor: transform ? 'move' : 'pointer'
        }}
      />
    </div>
  );
}

function Gallery() {
  const [positions, setPositions] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Function to check if two rectangles overlap
  const isOverlapping = (rect1, rect2) => {
    return !(rect1.x + rect1.width < rect2.x ||
             rect1.x > rect2.x + rect2.width ||
             rect1.y + rect1.height < rect2.y ||
             rect1.y > rect2.y + rect2.height);
  };

  // Function to generate random position for an image
  const generateRandomPosition = (width, height, existingPositions) => {
    const isMobile = window.innerWidth <= 768;
    const scale = isMobile ? 0.7 : 1;
    const padding = 20;
    const containerWidth = window.innerWidth - (width * scale) - padding;
    const containerHeight = window.innerHeight - (height * scale) - padding - 56;

    let attempts = 0;
    let maxAttempts = 100;
    let newPosition;

    do {
      newPosition = {
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight + 56,
        width: width * scale,
        height: height * scale
      };
      attempts++;

      const hasOverlap = Object.values(existingPositions).some(pos => 
        isOverlapping(newPosition, pos)
      );

      if (!hasOverlap || attempts >= maxAttempts) {
        return newPosition;
      }
    } while (attempts < maxAttempts);

    return newPosition;
  };

  // Initialize random positions for all images
  useEffect(() => {
    const handleResize = () => {
      const newPositions = {};
      images.forEach(image => {
        newPositions[image.id] = generateRandomPosition(
          image.width,
          image.height,
          newPositions
        );
      });
      setPositions(newPositions);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragEnd = (event) => {
    const { active, delta } = event;
    const id = active.id;

    setPositions(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        x: prev[id].x + delta.x,
        y: prev[id].y + delta.y
      }
    }));
  };

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  return (
    <>
      <NavigationBar />
      <DndContext onDragEnd={handleDragEnd}>
        <div className="gallery-container">
          {images.map((image) => {
            const isLoaded = loadedImages.has(image.id);
            return positions[image.id] ? (
              <div key={image.id} style={{ position: 'relative' }}>
                <DraggableImage
                  {...image}
                  position={positions[image.id]}
                  onImageClick={setSelectedImage}
                  onImageLoad={handleImageLoad}
                  isLoaded={isLoaded}
                />
                {!isLoaded && (
                  <ImageSkeleton
                    width={image.width}
                    height={image.height}
                    position={positions[image.id]}
                  />
                )}
              </div>
            ) : null;
          })}
        </div>
      </DndContext>
      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="image-modal"
      >
        <div className="modal-content">
          <img
            src={selectedImage}
            alt="Enlarged view"
            onClick={() => setSelectedImage(null)}
          />
        </div>
      </Modal>
    </>
  );
}

export default Gallery; 