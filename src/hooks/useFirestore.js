import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((el) => {
          documents.push({ ...el.data(), id: el.id });
        });
        setDocs(documents);
      });
  }, [collection]);

  return { docs };
};
