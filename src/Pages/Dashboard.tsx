import React from "react";

import CardDashboard from "../components/sandy/CardDashboard";

const Dashboard = () => {
  return (
    <div className=" container w-full">
      <div className=" flex justify-center">
        <div className=" grid grid-cols-1 gap-5">
          <div className=" flex gap-4 ">
            <CardDashboard
              id=""
              title=" Mente Active"
              image="src\assets\Indikatoruser.svg"
              value="50"
            />
            <CardDashboard
              id=""
              title="Mente Placement"
              image="src\assets\palcemnet.svg"
              value="50"
            />
            <CardDashboard
              id=""
              title=" Mente Fedback"
              image="src\assets\notif.svg"
              value="50"
            />
          </div>
          <div className=" bg-slate-100 rounded-md">
            <img className=" p-4" src="src\assets\Grapich Line.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
