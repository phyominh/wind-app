import React from "react";

import logo from "../../assets/wind-logo.svg";

const Navbar = () => {
  return (
    <div className="menu">
      <div className="py-small">
        <a href="/">
          <figure className="site-logo">
            <img src={logo} alt="Wind Data Myanmar" />
          </figure>
        </a>
      </div>
      <ul className="menu-list">
        <li>
          <a className="is-active is-flex" href="">
            <span className="icon nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                  <g data-name="pie-chart">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M13 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 9 9 0 0 0-9-9zm1 8V4.07A7 7 0 0 1 19.93 10z" />
                    <path d="M20.82 14.06a1 1 0 0 0-1.28.61A8 8 0 1 1 9.33 4.46a1 1 0 0 0-.66-1.89 10 10 0 1 0 12.76 12.76 1 1 0 0 0-.61-1.27z" />
                  </g>
                </g>
              </svg>
            </span>
            Dashboard
          </a>
        </li>
        <li>
          <a className="is-flex" href="">
            <span className="icon nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                  <g data-name="keypad">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                    <path d="M12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                    <path d="M19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                    <path d="M5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                    <path d="M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                    <path d="M19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                    <path d="M5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                    <path d="M12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                    <path d="M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                  </g>
                </g>
              </svg>
            </span>
            Calculation
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
