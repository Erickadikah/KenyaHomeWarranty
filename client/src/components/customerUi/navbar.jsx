import React, { useState } from "react";
import { FaBars, FaUser, FaHeadset, FaCog, FaSignOutAlt } from "react-icons/fa"; // Import icons from react-icons
import SideBar from "./sidebar";


const accountOptions = ["Logout", "Settings"];
const accountOptionIcons = [<FaSignOutAlt />, <FaCog />];

const navItems = [
  { title: "Menu", icon: <FaBars size={22} /> },
  {
    title: "Account",
    icon: <FaUser size={22} />,
    dropDown: accountOptions,
    dropDownIcons: accountOptionIcons,
  },
  { title: "Contact Support", icon: <FaHeadset size={22} /> },
];

function DropdownItem({ title, icon, options, icons }) {
  return (
    <li>
      {icon}
      <div className="drop-down account-drop-down">
        {options.map((item, index) => (
          <div key={index}>
            <p>
              {item}
              {icons && <span className="nav-link">{icons[index]}</span>}
            </p>
          </div>
        ))}
      </div>
    </li>
  );
}

function NavBar() {
  const [showSideMenu, setSideMenu] = useState(false);

  function toggleSideMenu() {
    setSideMenu((oldVal) => !oldVal);
  }

  return (
    <>
      <nav className="navBar shadow-sm bg-white bg-gradient" style={{ zIndex: 1000 }}>
        <div className="nav-menu">
          <span className="nav-link" onClick={toggleSideMenu}>
            {navItems[0].icon}
          </span>
        </div>
        <div className="Logo">
          <h1 className="text-info">
            <a href="#">KHW</a>
          </h1>
        </div>
        <div id="topRight">
          <ul>
            {navItems.slice(1).map((item, index) =>
              item.title === "Contact Support" ? (
                <li key={index}>
                  <span className="nav-link">{item.icon}</span>
                </li>
              ) : (
                <DropdownItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  options={item.dropDown}
                  icons={item.dropDownIcons}
                />
              )
            )}
          </ul>
        </div>
      </nav>
      <SideBar showSideMenu={showSideMenu} toggleSideMenu={toggleSideMenu} />
    </>
  );
}

export default NavBar;
