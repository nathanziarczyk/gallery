import React, { useState } from "react";

import "./css/import.scss";
import Header from "./components/Header";
import { initialErrorState, ErrorContext } from "./context/errors";

function App() {
  const [error, setError] = useState(initialErrorState);
  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <div className="App">
        <Header />
      </div>
    </ErrorContext.Provider>
  );
}

export default App;
