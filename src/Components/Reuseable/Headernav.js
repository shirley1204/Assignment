import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import './Headernav.css'

const Headernav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">LOGO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/home"  className='navmenus' style={{textDecoration:'none'}}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/tasks"  className='navmenus' style={{textDecoration:'none'}}>Task</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/user"  className='navmenus' style={{textDecoration:'none'}}>User</NavLink>
            </NavItem>
          </Nav>
          <NavItem>
            <NavLink to="/" className='navmenus' style={{textDecoration:'none'}}>Logout</NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Headernav;
