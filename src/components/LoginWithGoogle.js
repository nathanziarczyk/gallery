import React from "react";
import { signInWithGoogle } from "../firebase/config";

export default function LoginWithGoogle() {
  return (
    <div>
      <button onClick={(e) => signInWithGoogle()}>Login With Google</button>
    </div>
  );
}
