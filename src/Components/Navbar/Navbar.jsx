import React from "react";
import "./Navbar.css";
import menuIcon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import uploadIcon from "../../assets/upload.png";
import moreIcon from "../../assets/more.png";
import notificationIcon from "../../assets/notification.png";
import profileIcon from "../../assets/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex__div">
      <div className="nav__left flex__div">
        <img
          src={menuIcon}
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          alt="menu icon"
          className="menu__icon"
        />
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>

      <div className="nav__middle flex__div">
        <div className="search__box flex__div">
          <input type="text" placeholder="Search" />
          <img src={searchIcon} alt="search icon" />
        </div>
      </div>

      <div className="nav__right flex__div">
        <img src={uploadIcon} alt="upload icon" />
        <img src={moreIcon} alt="more icon" />
        <img src={notificationIcon} alt="notification icon" />
        <img src={profileIcon} className="user__icon" alt="profile icon" />
      </div>
    </nav>
  );
};

export default Navbar;
