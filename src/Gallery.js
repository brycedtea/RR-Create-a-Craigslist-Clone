import React from 'react';
import Posting from './Posting'

function Gallery(){
    const craigPost = require('./postings')
    const postList = craigPost.postings.map((data, i) => {
        <Posting data={data} key={i} />
    })
    return (
        <>
      <h2>Gallery</h2>
      {postList}
        </>
    )
  }

  export default Gallery