import React from "react";
import { useFirestore } from "../hooks/useFirestore";

export default function Images({ setImage }) {
  const { docs } = useFirestore("images");
  return (
    <div className="container images-grid">
      {docs.map((doc) => (
        <div
          className="images-grid-item"
          key={doc.id}
          onClick={(e) => setImage(doc.url)}
        >
          <img src={doc.url} alt="dat van iets" />
        </div>
      ))}
    </div>
  );
}
