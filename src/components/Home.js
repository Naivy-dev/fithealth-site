import React from "react";
import NavBar from "./NavBar";
import Feed from "./Feed";
import "../styles/MainContainer.css";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="main">
        <div></div>
        <Feed />
        <div></div>
      </div>
    </>
  );
}
