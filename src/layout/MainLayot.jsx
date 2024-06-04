import React from "react";
import { Outlet } from "react-router-dom";
import Novbar from "../components/Novbar";

function MainLayot() {
  return (
    <>
      <Novbar />
      <Outlet />
    </>
  );
}

export default MainLayot;
