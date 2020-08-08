import React, { useContext } from "react";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Images from "../components/Images";
import { UserContext } from "../context/user";

export default function Home({ image, setImage }) {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      {image && <Modal image={image} setImage={setImage} />}
      <Header />
      <Images setImage={setImage} />
    </div>
  );
}
