import React from "react";
import profilePic from "../images/default pfp.png";
import logo from "../images/logo192.png";
import { Navbar, NavDropdown, Image } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
      <Navbar.Brand href="#home">
        <Image src={logo} height="40px" width="40px"></Image>
      </Navbar.Brand>

      <NavDropdown id="navbarScrollingDropdown" className="ms-auto">
        <NavDropdown.Item href="#action3">Perfil</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Configurações</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
      </NavDropdown>
      <Image src={profilePic} height="40px" width="40px" rounded="y"></Image>
    </Navbar>
  );
}
