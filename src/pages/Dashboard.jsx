import React, { useEffect } from "react";
import "./Dashboard.css";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Setting from "../components/Settings/Setting";

import DashboardHome from "../pages/Dashboard/Home"
import Loading from "../components/Loading/Loading";
const Dashboard = ({ toggleMode, toggleFullScreen, loading, setLoading }) => {
  const [expand, setExpand] = React.useState(true);
  const [setting, setSetting] = React.useState(false);
  // -------------- TOGGLE SIDE BAR ----------------
  const toggleSideBar = () => {
    const newExpandState = !expand;
    setExpand(newExpandState);
    localStorage.setItem("expand", newExpandState);
  };
  //--------------------------------------------------
  const toggleSetting = () => {
    setSetting(!setting);
  };
  //-----------------TOGGLE SETTING BAR ----------------
  useEffect(() => {
    const isExpanded = localStorage.getItem("expand") === "true";
    setExpand(isExpanded);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth >= 768) {
        const isExpanded = localStorage.getItem("expand") === "true";
        setExpand(isExpanded);
      } else {
        setExpand(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }
  //--------------------------------------------------------------------

  return (
    <div className="dashboard-container">
      <SideBar
        expand={expand}
        setExpand={setExpand}
        toggleSideBar={toggleSideBar}
      />
      <Setting setting={setting} toggleSetting={toggleSetting} />
      <section className="dashboard-main-frame">
        <Header
          toggleMode={toggleMode}
          toggleFullScreen={toggleFullScreen}
          expand={expand}
          setExpand={setExpand}
          toggleSetting={toggleSetting}
        />

        <div className={`dashboard-margin ${expand ? "active" : ""}`}>
        <DashboardHome/>
          
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
