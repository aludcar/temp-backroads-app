import React from "react";

import logo from "../images/logo.svg";
import SocialIcons from "./SocialIcons";
import PageLinks from "./PageLinks";

export const Navbar = ({ pageLinks, socialLinks }) => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <PageLinks pageLinks={pageLinks} />
          <SocialIcons socialLinks={socialLinks} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
