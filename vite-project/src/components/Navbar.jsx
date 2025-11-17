import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">ChillDV</h3>

      <div className={`nav-items ${open ? "open" : ""}`}>
        <p>Icecreams</p>
        <p>About</p>
        <p>Contact</p>
        <p>Dairy Shop</p>
      </div>

      <div className="icon" onClick={() => setOpen(!open)}>
        <GiHamburgerMenu size={26} />
      </div>
    </nav>
  );
};

export default Navbar;
