import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./SideBar.css";
import { IoHome } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export const SideBarData = [
  { id: 1, icon: <IoHome />, title: "Home", path: "/home" },
  { id: 2, icon: <IoIosPeople />, title: "Employee", path: "/about" },
  { id: 3, icon: <IoNotifications />, title: "Notification", path: "/services" },
  { id: 4, icon: <FaGear />, title: "Setting", path: "/home" },
  {
    id: 5,
    icon: <AiFillProduct />,
    title: "Products iuhiu jfjfh",
    children: [
      { subTitle: "Products", path: "/home" },
      { subTitle: "Add Product", path: "/home" },
      { subTitle: "Delete Product", path: "/home" },
    ],
  },
  {
    id: 6,
    icon: <AiFillProduct />,
    title: "Products",
    children: [
      { subTitle: "Products", path: "/home" },
      { subTitle: "Add Product", path: "/home" },
      { subTitle: "Delete Product", path: "/home" },
    ],
  },
  { id: 7, icon: <IoHome />, title: "Services", path: "/services" },
  { id: 8, icon: <IoHome />, title: "Home", path: "/home" },
  { id: 9, icon: <IoHome />, title: "Home", path: "/home" },
  { id: 10, icon: <IoIosPeople />, title: "Employee", path: "/about" },
  { id: 11, icon: <IoNotifications />, title: "Notification", path: "/services" },
  { id: 12, icon: <FaGear />, title: "Setting", path: "/home" },
  {
    id: 13,
    icon: <AiFillProduct />,
    title: "Products iuhiu jfjfh",
    children: [
      { subTitle: "Products", path: "/home" },
      { subTitle: "Add Product", path: "/home" },
      { subTitle: "Delete Product", path: "/home" },
    ],
  },
  {
    id: 14,
    icon: <AiFillProduct />,
    title: "Products",
    children: [
      { subTitle: "Products", path: "/home" },
      { subTitle: "Add Product", path: "/home" },
      { subTitle: "Delete Product", path: "/home" },
    ],
  },
  { id: 15, icon: <IoHome />, title: "Services", path: "/services" },
  { id: 16, icon: <IoHome />, title: "Home", path: "/home" },
];

export const SubMenu = ({ item, expand }) => {
  const [isActive, setIsActive] = useState(false);
  const [hoverSubMenu, setHoverSubMenu] = useState(false);
  const submenuRef = useRef(null);

  // --------------------- SUBMENU SECTION --------------------------------------------

  const [activeItem, setActiveItem] = useState(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (id, event) => {
    const rect = event.target.getBoundingClientRect();
    setSubmenuPosition({ top: rect.top, left: rect.right });
    setActiveItem(id);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };
  //-----------------------------------------------------------------------------------

  // --------------------- EXPAND SUBMENU WHEN EXPAND is TRUE  -----------------------
  useEffect(() => {
    if (isActive) {
      submenuRef.current.style.maxHeight = `${submenuRef.current.scrollHeight}px`;
    } else {
      submenuRef.current.style.maxHeight = "0px";
    }
  }, [isActive, expand]);
  //-----------------------------------------------------------------------------------

  return (
    <div className={`sidebar-submenu-container `} onMouseLeave={handleMouseLeave}>
      <div
        onClick={(e) => {
          expand && setIsActive(!isActive);
        }}
        onMouseEnter={(e) => handleMouseEnter(item.id, e)}
        className={`sidebar-menu-item ${expand ? "" : "active"}`}
      >
        <div className={`sidebar-menu-item-icon ${expand ? "" : "active"}`}>
          {item.icon}
        </div>
        <div className={`sidebar-menu-item-title ${expand ? "" : "active"}`}>
          <div className="sidebar-submenu-child-item-icon">
            {isActive ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
          {item.title}
        </div>
      </div>
      {expand ? (
        <div
          ref={submenuRef}
          className={`sidebar-submenu-childrens ${isActive ? "active" : ""} `}
        >
          {item.children.map((child, index) => (
            <div key={index} className="sidebar-submenu-child-item ">
              {child.subTitle}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div ref={submenuRef}></div>
          {activeItem !== null &&
            SideBarData.find((data) => data.id === activeItem).children &&
            ReactDOM.createPortal(
              <div
                className="sidebar-submenu"
                style={{ top: submenuPosition.top, left: submenuPosition.left }}
              >
                {SideBarData.find((data) => data.id === activeItem).children.map(
                  (subItem, index) => (
                    <div key={index} className="sidebar-submenu-item ">
                      {subItem.subTitle}
                    </div>
                  )
                )}
              </div>,
              document.body
            )}
        </>
      )}
    </div>
  );
};

export const MenuItem = ({ item, expand, clickIndication, clickedItem }) => {
  return (
    <div
      className={`sidebar-menu-item ${expand ? "" : "active"} ${
        clickedItem === item.id && "item-clicked"
      }`}
      style={{ backgroundColor: clickedItem === item.id && "--warning-color" }}
      onClick={(e) => clickIndication(e, item.id)}
    >
      <div className={`sidebar-menu-item-icon ${expand ? "" : "active"}`}>
        {item.icon}
      </div>
      <div className={`sidebar-menu-item-title ${expand ? "" : "active"}`}>
        {item.title}
      </div>
    </div>
  );
};

const SideBar = ({ expand, toggleSideBar }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const clickIndication = (e, id) => {
    e.stopPropagation();
    setClickedItem(id);
  };

  return (
    <div className={`sidebar-container ${expand ? "active" : ""}`}>
      <div className="sidebar-close-button" onClick={toggleSideBar}>
        X
      </div>
      <div className="sidebar-open-button" onClick={toggleSideBar}>
       <RxHamburgerMenu/>
      </div>
      <div className={`sidebar-logo-container ${expand ? "" : "active"}`}>
        <img src="./logo192.png" className="sidebar-logo" />
      </div>
      <nav
        className="sidebar-menu-container sidebar-menu-spacer"
        style={{ overflowY: isHovered ? "scroll" : "hidden" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {SideBarData &&
          SideBarData.map((item, index) => (
            <div key={index}>
              {item.children ? (
                <SubMenu item={item} expand={expand} />
              ) : (
                <MenuItem
                  item={item}
                  expand={expand}
                  clickIndication={clickIndication}
                  clickedItem={clickedItem}
                />
              )}
            </div>
          ))}
      </nav>
    </div>
  );
};

export default SideBar;