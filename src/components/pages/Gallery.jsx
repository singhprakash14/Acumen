import React from 'react';
import '../styles/Gallery.css';

const Gallery = ({ pictures }) => {
  return (
    <div className="gallery">
      {pictures.map((picture) => (
        <div key={picture.id} className="gallery-item">
          <img src={picture.urls.regular} alt={picture.alt_description} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
