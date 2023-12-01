import React, { useEffect, useState } from "react";
import { MdHome, MdHeadset, MdAccountBalanceWallet, MdSettings, MdExitToApp} from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import profilePic from "../../assets/images/customerUi/icons/sidemenu/profile.png";

export default function SideBar(props) {
  const styles = {
    display: props.showSideMenu ? 'block' : 'none',
    zIndex: 1200,
  };

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = window.location.href.split('=')[1];
      try {
        const response = await fetch(`https://backend-phki.onrender.com/users/${userId}`);
        const data = await response.json();
        setUserName(`${data.user.firstname} ${data.user.lastname}`);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchUserData(); // Call the fetchUserData function to get user data

  }, []);

  const iconSize = 18; // Define the desired icon size

  const sidebarItems = [
    {
      title: "Home",
      icon: <MdHome size={iconSize} />,
      redirectTo: `/userdashboard/?user=${window.location.href.split('=')[1]}`,
    },
    {
      title: "Requests",
      icon: <MdHeadset size={iconSize} />,
      redirectTo: `/requests/?user=${window.location.href.split('=')[1]}`,
    },
    {
      title: "Plans",
      icon: <MdAccountBalanceWallet size={iconSize} />,
      redirectTo: `/plans/?user=${window.location.href.split('=')[1]}`,
    },
    {
      title: "Profile Settings",
      icon: <MdSettings size={iconSize} />,
      redirectTo: `/profile/settings/?user=${window.location.href.split('=')[1]}`,
    },
    {
      title: "Contact Support",
      icon: <AiOutlineUser size={iconSize} />,
      redirectTo: `/contactsupport/?user=${window.location.href.split('=')[1]}`,
    },
    {
      title: "Logout",
      icon: <MdExitToApp size={iconSize} />,
      redirectTo: "/authuser/signin",
    }
  ];

  const sideBarLink = sidebarItems.map((item, key) => (
    <li key={key}>
      <a href={item.redirectTo} rel="noopener" className="text-decoration-none text-light">
        <span>{item.icon}</span>
        <span style={{marginLeft: '10px'}}>{item.title}</span>
      </a>
    </li>
  ));

  const closeButtonStyles = {
    cursor: "pointer",
    positon: "fixed",
    top: 0,
    left: 0,
    marginLeft: "110px",
    marginBottom: "30px",
  }

  return (
    <>
      <div className="side-menu shadow-sm text-white" style={styles}>
        <div className="userAccount border-bottom">
          <div><img src={profilePic} alt="profile" /></div>
          <div>
            <p>{userName}</p>
            <div onClick={props.toggleSideMenu} style={closeButtonStyles}>
              <button className="btn-close btn-sm" title="close menu"></button>
            </div>
          </div>
        </div>
        <div className="sidebar-links" style={{ marginRight: "10px" }}>
          <ul>
            {sideBarLink}
          </ul>
        </div>
      </div>
    </>
  );
}
