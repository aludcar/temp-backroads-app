import React from "react";

const PageLinks = ({pageLinks, isNav = true}) => {
  return (
    <>
      {" "}
      <ul className={isNav ? 'nav-links': 'footer-links'}>
        {pageLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className={isNav ? 'nav-link': 'footer-link'}>
              {" "}
              {link.text}{" "}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PageLinks;
