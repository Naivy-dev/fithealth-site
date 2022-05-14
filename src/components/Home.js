import React from "react";
import NavBar from "./NavBar";
import MainFeed from "./MainFeed";
import Chat from "./Chat";
import "../styles/MainContainer.css";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="main">
        <div></div>
        <MainFeed />
        <div></div>
        <Chat />
        <div></div>
      </div>
    </>
  );
}
