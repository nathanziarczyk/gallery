import React, { useContext } from "react";
import { motion } from "framer-motion";
import { BsFillTrashFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

import { useFirestore } from "../hooks/useFirestore";
import { UserContext } from "../context/user";

export default function Images({ setImage }) {
  const { docs } = useFirestore("images");
  const { user } = useContext(UserContext);
  console.log(user.uid);
  return (
    <div className="container images-grid">
      {docs.map((doc) => {
        console.log(doc);
        return (
          <motion.div
            className="images-grid-item"
            key={doc.id}
            onClick={(e) => {
              if (e.target.classList.contains("trash-icon")) return null;
              setImage(doc.url);
            }}
            whileHover={{ opacity: 1 }}
            layout
          >
            <motion.img
              src={doc.url}
              alt="dat van iets"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            {/* {user.uid === doc.user.id && (
              <BsFillTrashFill className="trash-icon" />
            )} */}
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="trash-icon" />
            </a>
          </motion.div>
        );
      })}
    </div>
  );
}
