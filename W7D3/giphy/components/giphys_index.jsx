import React from 'react';

import GiphysIndexItem from './giphys_index_item';
const x = "https://giphy.com/embed/XKnvIs2ELq7du";
const Arrayize = (gifs) => {
  let keys = Object.keys(gifs);
  keys.map((el) => {
    console.log("gif data:", gifs[el]);
    return gifs[el].embed_url;
  });
  // console.log(keys);

};
const GiphysIndex = ({ giphys }) => {
  return (
    <div>
      <p>{Arrayize(giphys)}</p>
      <ul>
        <GiphysIndexItem url={x}/>
      </ul>
    </div>
  );
};
// <iframe src={x} width="480" height="270" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/asdf-movie-XKnvIs2ELq7du">via GIPHY</a></p>

export default GiphysIndex;
