import React, { useState } from "react";
import NavBar from "./NavBar";
import Feed from "./Feed";
import ProfileContainer from "./ProfileContainer";
import "../styles/MainContainer.css";
import "../styles/SideMenus.css";
import "../styles/Post.css";
import "../styles/SearchBar.css";
import LeftSideMenu from "./LeftSideMenu";
import RightSideMenu from "./RightSideMenu";
export default function Home() {
  const [mode, setMode] = useState("feed");
  return (
    <>
      <NavBar setMode={setMode} />
      <div className="main">
        <div>
          <LeftSideMenu changeMode={(mode) => setMode(mode)} />
        </div>
        <div className="mainContainer">
          {mode === "feed" && <Feed />}
          {mode === "profile" && <ProfileContainer />}
        </div>
        <div>
          <RightSideMenu />
        </div>
      </div>
    </>
  );
}
