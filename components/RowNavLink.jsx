import React from "react";

const RowNavLink = ({ icon, text, href, handler }) => {
  const result = handler(href);

  console.log(result)

  return (
    <a
      href={href}
      className={`links-rows  ${result ? "active-nav-link": ""}  rounded-md p-2 flex gap-2 text-[var(--grays-mauve)] `}
    >
      {icon}
      <small className="text-xs">{text ? text : "Dashboard"}</small>
    </a>
  );
};

export default RowNavLink;
