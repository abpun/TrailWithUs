import { useState } from "react";

interface ImageHolderProps {
  img?: string;
  alt?: string;
  imgClassName?: string;
}

const ImageHolder = ({ 
  img, 
  alt = "", 
  imgClassName = "", 
}: ImageHolderProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative h-[18rem] w-full overflow-hidden">
      {!imageError && img ? (
        <img
          src={img}
          alt={alt}
          className={`h-full w-full object-cover ${imgClassName}`}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="h-full w-full bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">No image available</span>
        </div>
      )}


    </div>
  );
};

export default ImageHolder;