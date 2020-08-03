import React, { useState, useContext, useEffect } from "react";
import { ErrorContext } from "../context/errors";
import Progress from "./Progress";

export default function Header() {
  const [file, setFile] = useState(null);
  const { setError } = useContext(ErrorContext);

  const allowedTypes = ["image/png", "image/jpeg"];

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file && allowedTypes.includes(file.type)) {
      setFile(file);
      setError({ msg: "" });
    } else {
      setFile(null);
      console.log(file);
      setError({ msg: "Select a file of the allowed type (png, jpg)" });
    }
  };
  return (
    <div className="header">
      <div className="container header-items">
        <h1>InstaClone</h1>
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
