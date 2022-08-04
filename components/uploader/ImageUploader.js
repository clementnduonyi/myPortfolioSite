import React, { useState, useRef } from 'react';
import { uploadImage } from 'actions/uploads';
import { getCroppedImg, fileToBlob } from 'helpers/functions'
import Spinner from 'components/shared/spinner';
import ImgCropper from 'components/uploader/cropper';




class ImgSnipet {
  constructor(src, name, type){
      this.src = src
      this.name = name
      this.type = type
  }
}

function ImageUploader(props) {
  const { onImageUpload } = props
  const acceptedFiles = `.gif, .png, .jpeg, .jpg, .x-png`;
  const inputRef = useRef();
  const fileReader = new FileReader();
  
 
  const [selectedImg, setSelectedImg] = useState(null);
  const [image, setImage]= useState(null);
  const [croppedImg , setcroppedImg ] = useState(null);
  const [imageStatus, setImageStatus] = useState('')
 

  const handleChange = event =>{
    const file = event.target.files[0]
    if(file){
        fileReader.readAsDataURL(file)
        fileReader.onloadend = () =>{
            const selectedImg = new ImgSnipet(fileReader.result, file.name, file.type)
            setSelectedImg(selectedImg)
            setImageStatus('LOADED')
        }
    }
   
  }

  const handleUpload = async () =>{
    setSelectedImg(croppedImg);
    setImageStatus('PENDING');
    const imageToUpload = fileToBlob(croppedImg);
    try{
      const uploadedImage = await uploadImage(imageToUpload)
      onImageUpload(uploadedImage)
      setImageStatus('UPLOADED');
    }catch(e){
      setImageStatus('ERROR');
    }
  }

  const handleImageLoad = (image) => {
    setImage(image); 
  };

  const onCropComplete = async (crop) => {
    if (!image) {return}
      setSelectedImg(selectedImg)
      const croppedImg = await getCroppedImg(image, crop, selectedImg.name);
      setcroppedImg(croppedImg);
    
  }

  const cancelUpload = () => {
    inputRef.current.value = null;
    setImage(null);
    setSelectedImg(null);
    setcroppedImg (null);
    setImageStatus('INIT')
  }

  return (
    <>
      <input
        ref={inputRef}
        onChange={ handleChange }
        className="form-control"
        accept={acceptedFiles}
        type="file"
      />
      {selectedImg  &&
        <ImgCropper
         src={selectedImg.src}
         className='cropping-img-container mt-2'
         onCropComplete={onCropComplete}
         onImgLoaded={handleImageLoad} />
        
      }
  {selectedImg  &&
    <>
      <div className="img-preview-container">
          <div className="img-preview mb-1">
              <img src={(croppedImg && croppedImg.url ) || selectedImg.src} alt="" />
          </div>
          {imageStatus === "PENDING" &&
              <div className="spinner-container">
                  <Spinner />
              </div>

          }

          {imageStatus === "UPLOADED" &&
              <div className="alert alert-success">
                  Image successfuly uploaded!
              </div>

          }

          {imageStatus === "ERROR" &&
              <div className="alert alert-danger">
                  Faild, try again!
              </div>

          }
          {imageStatus === "LOADED" &&
              <>
                  <button
                  className="btn btn-success me-1" 
                  type="button"
                  onClick={handleUpload}>
                      Upload
                  </button>
              </>
          }
          <button
          className="btn btn-danger" 
          type="button"
          onClick={cancelUpload}>
              Discard
          </button>
      </div>
            
      </>
  }
    </>
      
  )
}


export default ImageUploader;





