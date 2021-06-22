import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topIcon topLeft">
        <i className="topIcon fa fa-facebook" />
        <i className="topIcon fa fa-linkedin" />
        <i className="topIcon fa fa-instagram" />
        <i className="topIcon fa fa-twitter" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-1/p480x480/193282931_5704933496245232_8097569477220943714_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=0dOpf4jR1OMAX82363P&_nc_pt=5&_nc_ht=scontent.fmba5-1.fna&tp=6&oh=debb44405dad49ac846068dba66eeac7&oe=60D69DCC"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa fa-search" />
      </div>
    </div>
  );
}
