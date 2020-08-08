import React from "react";
import { signInWithGoogle } from "../firebase/config";

export default function LoginWithGoogle() {
  return (
    <div className="sign-in-with-google">
      <img
        src={require("../images/google.png")}
        onClick={signInWithGoogle}
        alt="hahaii"
      />
    </div>
  );
}
