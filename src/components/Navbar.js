import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../styles/NullValue3.0logo.png";
import Cookies from "universal-cookie";
import "../styles/Navbar/navbar.scss";
import Unstoppable from "./unstoppabledomains/Unstoppable";

const Navbar = ({ setOpenWalletOption, userAddress }) => {
  const cookie = new Cookies();
  const [address, setAddress] = useState(cookie.get("account"));
  const location = useLocation();

  useEffect(() => {
    const addr = cookie.get("account");
    if (addr) {
      setAddress(addr);
    }
  }, [cookie]);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <>
      <div className="navbar-main">
        <Link className="logo_link" to="/">
          <div className="navbar-left">
            <img src={logo} alt="logo" />
            <div className="navbar-logo">
              <span>NullValue 3.0</span>
            </div>
          </div>
        </Link>
        <div className="navbar-middle">
          {/* <div className="searchbar">
            <input type="text" />
          </div> */}
        </div>
        <div className="navbar-right">
          <ul>
            {address || userAddress ? (
              <>
                <li
                  className={
                    window.location.pathname === "/ask-question"
                      ? "active"
                      : null
                  }
                >
                  <Link to="/ask-question">Ask Question</Link>
                </li>
                <li
                  className={
                    window.location.pathname === "/find-question"
                      ? "active"
                      : null
                  }
                >
                  <Link to="/find-question">All Questions</Link>
                </li>
                <li
                  className={
                    window.location.pathname === "/add-article"
                      ? "active"
                      : null
                  }
                >
                  <Link to="/add-article">Add Article</Link>
                </li>

                <li
                  className={
                    window.location.pathname === "/find-profile"
                      ? "active"
                      : null
                  }
                >
                  <Link to="/find-profile">All Users</Link>
                </li>
                <li
                  className={
                    window.location.pathname === "/profile" ? "active" : null
                  }
                >
                  <Link to="profile">Profile</Link>
                </li>
                <li>
                  {userAddress ? (
                    <span className="udname">{userAddress}</span>
                  ) : null}
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    className="connect-btn"
                    onClick={() => {
                      setOpenWalletOption(true);
                    }}
                  >
                    <span className="text">Connect Wallet</span>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
