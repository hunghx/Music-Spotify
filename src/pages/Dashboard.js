import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard(props) {
  return (
    <>
      <div>
        <div className="wrapper">
          {/* Sidebar  */}
          <Sidebar />
          {/* Page Content  */}
          <Outlet />
        </div>
        {props.songPlay && <Footer {...props} />}
      </div>
    </>
  );
}

export default Dashboard;
