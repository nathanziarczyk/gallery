import React, { useState, useEffect } from "react";

import "./css/import.scss";
import { initialErrorState, ErrorContext } from "./context/errors";
import { UserContext, initialUserState } from "./context/user";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { auth } from "./firebase/config";
import Overlay from "./components/Overlay";

function App() {
  const [error, setError] = useState(initialErrorState);
  const [user, setUser] = useState(initialUserState);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setUser(user);
      document.querySelector("body").style.overflow = "auto";
      document.querySelector(".overlay").style.opacity = "0";
      document.querySelector(".overlay").style.zIndex = -100;
    });

    return () => unsub();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ErrorContext.Provider value={{ error, setError }}>
        <div className="App">
          <Overlay />
          {user ? <Home image={image} setImage={setImage} /> : <Login />}
        </div>
      </ErrorContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
