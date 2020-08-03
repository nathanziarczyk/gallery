import React from "react";

export default function Modal({ image, setImage }) {
  const handleModalClick = (e) => {
    if (e.target.classList.contains("image-modal")) {
      setImage(null);
    }
  };
  return (
    <div className="image-modal" onClick={(e) => handleModalClick(e)}>
      <img src={image} alt="overlay" />
    </div>
  );
}
