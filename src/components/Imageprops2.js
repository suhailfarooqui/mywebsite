import React from 'react';

export default function ImageGrid (props)  {
  return (
    <div className="image-grid row">
      {props.images.map((image, index) => (
        <div className="image-item col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
          <img src={image.url} alt={`Image ${index}` } style={{width:"100%"}}/>
        </div> 
      ))}
    </div>
  );
};

// export default ImageGrid;
