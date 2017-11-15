import React from 'react';

import GiphysIndexItem from './giphys_index_item';
const x = "https://giphy.com/embed/XKnvIs2ELq7du";
const Arrayize = (gifs) => {
  let keys = Object.keys(gifs);
  return keys.map((el) => {
    // console.log("gif data:", gifs[el].images.downsized.url);
    // return gifs[el].images.downsized.url;
    return (
      <GiphysIndexItem url={gifs[el].images.downsized.url} />
    );
  });
};
const GiphysIndex = ({ giphys }) => {
  return (
    <div>
      <ul>
        {Arrayize(giphys)}
      </ul>
    </div>
  );
};
// <GiphysIndexItem url={Arrayize(giphys)}/>
// <iframe src={x} width="480" height="270" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/asdf-movie-XKnvIs2ELq7du">via GIPHY</a></p>

export default GiphysIndex;
