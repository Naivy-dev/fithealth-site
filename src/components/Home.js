import React, { useState } from "react";
import NavBar from "./NavBar";
import Feed from "./Feed";
import ProfileContainer from "./ProfileContainer";
import "../styles/MainContainer.css";
export default function Home() {
  const [mode, setMode] = useState("feed");
  return (
    <>
      <NavBar setMode={setMode} />
      <div className="main">
        <div></div>
        <div className="mainContainer">
          {mode === "feed" && <Feed />}
          {mode === "profile" && <ProfileContainer />}
        </div>
        <div></div>
      </div>
    </>
  );
}
