


export const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
  
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );
  
    // As Base64 string
    /*const base64Image = canvas.toDataURL('image/jpeg');
    return base64Image;*/
  
    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if(!blob){
          reject('Canvas is empty')
        }
        blob.name = fileName;
        const fileUrl = window.URL.createObjectURL(blob);
        blob.url = fileUrl;
        resolve(blob);
       }, 'image/jpeg', 1);
     });
  }
  
  
  export const fileToBlob = (blob) => {
    return new File([blob], blob.name, {type: blob.type});
  }

  