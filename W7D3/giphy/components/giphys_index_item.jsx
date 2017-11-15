import React from 'react';
const GiphysIndexItem = (url) => {
  return (
    <div>
      <iframe src={url} width="480" height="270" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/asdf-movie-XKnvIs2ELq7du">via GIPHY</a></p>
    </div>
  );
};

export default GiphysIndexItem;
