import React from "react";
import { useFirestore } from "../hooks/useFirestore";
import { motion } from "framer-motion";

export default function Images({ setImage }) {
  const { docs } = useFirestore("images");
  return (
    <div className="container images-grid">
      {docs.map((doc) => (
        <motion.div
          className="images-grid-item"
          key={doc.id}
          onClick={(e) => setImage(doc.url)}
          whileHover={{ opacity: 1 }}
          layout
        >
          <motion.img
            src={doc.url}
            alt="dat van iets"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
