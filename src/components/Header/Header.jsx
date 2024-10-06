import React from "react";
import { MdFullscreen } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import "./Header.css";
const Header = ({ toggleMode, toggleFullScreen, expand, setExpand, toggleSetting }) => {
  return (
    <div className="header-container">
      <section className="header-hamburger-nav">
      <div className="header-hamburger">
        <RxHamburgerMenu onClick={() => setExpand(!expand)} />
        </div>
        <div className="header-company-name">dashboard</div>
     </section>
      <section className="header-nav">
        <div><IoNotifications/></div>
        <div><FaSearch/></div>
        <div><BsToggleOff onClick={toggleMode} /></div>
        <div onClick={toggleSetting}>< FaGear /></div>
        <div><MdFullscreen onClick={toggleFullScreen} /></div>
        <div className="header-profile-image"></div>
      </section>
      
      
    </div>
  );
};

export default Header;
