import React from "react";
import Menus from "./Menu";
import Navb from "./Nav";
import Aside from "./Aside";

export const Dashboard = () => {
  return (
    <div className="flex">
      <Aside />

      <div className="w-full">
        {/*navbar */}
        <Navb />
        <div>
          {/*Contenido Demas contenido*/}
          <Menus />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
