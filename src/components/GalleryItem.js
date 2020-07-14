import React from 'react';

const GalleryItem = ({picture}) => {

  let url = `https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`
  let altText = picture.title

  return (
    <li>
      <img src={url} alt={altText} />
    </li>
    )
}

export default GalleryItem
