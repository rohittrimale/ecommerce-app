import React from "react";

const NavbarButton = (props) => {
  return (
    <button className="hover:scale-110 duration-500 transition-transform">
      {props.children}
    </button>
  );
};

export default NavbarButton;
