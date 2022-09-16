import React from "react";
import logo from "../styles/NullValue3.0logo.png";
import "../styles/newnavbar.scss";

function NewNavbar() {
  return (
    <>
      <div className="navbar-section">
        <div className="navbar-left">
          <img src={logo} alt="logo" />
          <h1>Null Value 3.0</h1>
        </div>
        <div className="navbar-right">
          <button>
            <span class="text">Connect Wallet</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default NewNavbar;
