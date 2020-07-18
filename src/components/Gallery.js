import React from 'react'
import NoResults from './NoResults'
import GalleryItem from './GalleryItem'

const Gallery = ({pictureBook, loading, updateTag}) => {

  let galleryItems

  if( pictureBook.length > 0) {
    galleryItems = pictureBook.map((photo) =>
      <GalleryItem
      key={photo.id}
      picture={photo}
      />
    )
  } else {
    galleryItems = <NoResults />
  };

  return (
    <div className="photo-container">
      {loading? <h2>Fetching pictures...</h2>: <React.Fragment><ul>{galleryItems}</ul></React.Fragment>}
    </div>
  )

}

export default Gallery
