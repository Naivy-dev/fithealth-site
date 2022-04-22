import React from "react";
import Feed from "./Feed";
export default function MainFeed() {
  return (
    <div
      className="mainContainer"
      style={{
        display: "flex",
        padding: "30px 30px 0 30px",
        flexWrap: "wrap",
        gap: "30px",
        alignContent: "flex-start",
      }}
    >
      <Feed></Feed>
      <Feed></Feed>
    </div>
  );
}
