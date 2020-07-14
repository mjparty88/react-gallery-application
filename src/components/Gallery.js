import React from 'react'
import NotFound from './NotFound'
import GalleryItem from './GalleryItem'

const Gallery = ({pictureBook}) => {

  let galleryItems

  if( pictureBook.length > 0) {
    galleryItems = pictureBook.map((photo) =>
      <GalleryItem
      key={photo.id}
      picture={photo}
      />
    )
  } else {
    galleryItems = <NotFound />
  };

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {galleryItems}
      </ul>
    </div>
  )

}

export default Gallery
