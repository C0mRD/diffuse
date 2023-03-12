import React from 'react';

const ImageCard = ({ image: { id, src, prompt} }) => {
  return (
    <div className="movie" key={id}>
      <div>
        <p>{prompt}</p>
      </div>

      <div>
        <img src={src !== "N/A" ? src : "https://via.placeholder.com/400"} alt='change' />
      </div>

      {/* <div>
        <span>{model}</span>
      </div> */}
    </div>
  );
}

export default ImageCard;