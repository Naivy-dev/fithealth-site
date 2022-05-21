import React from "react";
import profilePic from "../images/default pfp.png";
import logo from "../images/logobrabaSemFundo.png";
import searchIcon from "../images/search-icon.png";
import { Navbar, NavDropdown, Image } from "react-bootstrap";

export default function NavBar(props) {
  const goToProfile = (e) => {
    e.preventDefault();
    props.setMode("profile");
  };
  const goToFeed = (e) => {
    e.preventDefault();
    props.setMode("feed");
  };

  return (
    <Navbar
      sticky="top"
      style={{
        paddingLeft: "100px",
        paddingRight: "100px",
        backgroundColor: "#f7fffc",
        boxShadow: "0 -3px 10px",
      }}
    >
      <Navbar.Brand onClick={goToFeed}>
        <Image src={logo} height="100%" width="72px"></Image>
      </Navbar.Brand>
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Pesquisar" />
          <button type="submit" className="searchButton">
            <img
              alt="Pesquisar"
              src={searchIcon}
              style={{ height: "60%", paddingRight: 10 }}
            />
          </button>
        </div>
      </div>
      <NavDropdown id="navbarScrollingDropdown" className="ms-auto">
        <NavDropdown.Item onClick={goToProfile}>Perfil</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item>Logout</NavDropdown.Item>
      </NavDropdown>
      <div className="side-profile-pic">
        <img alt="" src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735" />
      </div>
    </Navbar>
  );
}
