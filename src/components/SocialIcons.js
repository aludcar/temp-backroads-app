import React from "react";

const SocialIcons = ({ socialLinks, isNav = true }) => {
  return (
    <>
      {" "}
      <ul className={!isNav ? "footer-icons" : "nav-icons"}>
        {socialLinks.map((socialLink, i) => {
          return (
            <li key={i}>
              <a
                {...socialLink.hyperLink}
                className={!isNav ? socialLink.hyperLink.footIcon : socialLink.hyperLink.navIcon}
              >
                <i className={socialLink.iconClass}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SocialIcons;
