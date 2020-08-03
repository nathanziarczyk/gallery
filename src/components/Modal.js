import React from "react";
import { motion } from "framer-motion";

export default function Modal({ image, setImage }) {
  const handleModalClick = (e) => {
    if (e.target.classList.contains("image-modal")) {
      setImage(null);
    }
  };
  return (
    <div className="image-modal" onClick={(e) => handleModalClick(e)}>
      <motion.img
        src={image}
        alt="overlay"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </div>
  );
}
