import React from "react";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ background: "#151a25" }}
      >
        <span className="navbar-brand navbar-brand-style">
          <i class="fa-solid fa-chess-knight"></i>
          &nbsp;&nbsp;Knight Position Finder
        </span>
      </nav>
    </div>
  );
};

export default Header;
