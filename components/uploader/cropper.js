import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';


function ImgCropper(props) {
  const { src, onCropComplete, onImgLoaded, className } = props;
  
  const [crop, setCrop] = useState(
    {
      unit: "%",
      width: 30,
      aspect: 16 / 9
    }
  );

  
  return (
    <ReactCrop
    src={src} 
    crop={crop}
    className={className}
    ruleOfThirds
    onImageLoaded={onImgLoaded}
    onComplete={onCropComplete}
    onChange={(crop) => setCrop(crop)}
    />
      

  );
}



export default ImgCropper;
