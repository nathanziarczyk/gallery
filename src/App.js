import React, { useState } from "react";

import "./css/import.scss";
import Header from "./components/Header";
import Images from "./components/Images";
import { initialErrorState, ErrorContext } from "./context/errors";
import Modal from "./components/Modal";

function App() {
  const [error, setError] = useState(initialErrorState);
  const [image, setImage] = useState(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <div className="App">
        {image && <Modal image={image} setImage={setImage} />}
        <Header />
        <Images setImage={setImage} />
      </div>
    </ErrorContext.Provider>
  );
}

export default App;
