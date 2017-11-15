import React from 'react';
const GiphysIndexItem = (url) => {
  console.log(url.url);
  return (
    <div>
      <li><img src={url.url} /></li>
    </div>
  );
};

export default GiphysIndexItem;
