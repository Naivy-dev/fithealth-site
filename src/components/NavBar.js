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
        paddingLeft: "40px",
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
              style={{ height: "70%", paddingRight: 3 }}
            />
          </button>
        </div>
      </div>
      <NavDropdown id="navbarScrollingDropdown" className="ms-auto">
        <NavDropdown.Item onClick={goToProfile}>Perfil</NavDropdown.Item>
        <NavDropdown.Item>Configurações</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Logout</NavDropdown.Item>
      </NavDropdown>
      <Image src={profilePic} height="40px" width="40px" rounded="y"></Image>
    </Navbar>
  );
}
