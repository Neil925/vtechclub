import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../img/VC-tech-Tracks-No-words.png";
import "./navigate.scss";

class Navigate extends Component {
  constructor() {
    super();
    this.navInfo = [
      { to: "/", content: "Home" },
      { to: "/test", content: "Test" },
      { to: "/EminenceInShadow", content: "Eminence In Shadow" },
    ];
  }

  render() {
    return (
      <Navbar className={`component-nav sticky-top`} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="VTC logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" as="div">
            {this.navInfo.map((navItem, index) => {
              return (
                <NavLink className="nav-link" activeClassName="active" to={navItem.to} key={index}>
                  {navItem.content}
                </NavLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigate;
