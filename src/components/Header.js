import React, { useState, useContext } from "react";

import { ErrorContext } from "../context/errors";
import Progress from "./Progress";
import { signOut } from "../firebase/config";
import { UserContext } from "../context/user";

export default function Header() {
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const { setError } = useContext(ErrorContext);

  const allowedTypes = ["image/png", "image/jpeg"];
  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file && allowedTypes.includes(file.type)) {
      setFile(file);
      setError({ msg: "" });
    } else {
      setFile(null);
      setError({ msg: "Select a file of the allowed type (png, jpg)" });
    }
  };
  return (
    <div className="header">
      <div className="container header-items">
        <h1>InstaClone</h1>

        {user && (
          <div className="user-header">
            <p>Hello, {user.displayName.split(" ")[0]}</p>
            <p onClick={signOut}>Sign Out</p>
          </div>
        )}
        <form>
          <label>
            <input type="file" onChange={(e) => handleInputChange(e)} />
            <span>+</span>
          </label>
        </form>
        {file && <Progress file={file} setFile={setFile} />}
      </div>
    </div>
  );
}
