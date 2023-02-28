import React from "react";
import PageLinks from "./PageLinks";
import SocialIcons from "./SocialIcons";

const Footer = ({socialLinks, pageLinks}) => {
  return (
    <>
      {" "}
      <footer className="section footer">
        <PageLinks pageLinks={pageLinks} isNav={false} />
        <SocialIcons socialLinks={socialLinks} isNav={false} />

        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
