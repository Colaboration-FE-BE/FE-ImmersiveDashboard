import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../Layout";
import PopupNewLog from "../components/sandy/PopupNewLog";
import CardMente from "../components/sandy/CardMente";
import CardLog from "../components/sandy/CardLog";

const showNewLog = () => {
  Swal.fire({
    title: "New Log",
    html: content,
    confirmButtonText: "OK",
  });
};

const MenteLog = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Mente");
  };

  return (
    <Layout>
    <div className=" container justify-center m-5">
      <div className=" flex gap-3">
        <img src="src\assets\Back.svg" onClick={handleClick} />
        <div>
          <p className="self-stretch text-blue-950 text-xl font-bold leading-snug">
            Mente Log
          </p>
          <p className="self-stretch text-slate-400 text-xs font-medium">
            Welcom Back, Jhon Doe
          </p>
        </div>
      </div>
      <div className="mt-14">
        <CardMente
          full_name="Rachman Karim"
          class_id="FE-15"
          major="IPA"
          institution="SMA Negeri 4 Surabaya"
          phone="0813787876"
          telegram="@rachmankamil"
          discord="@rachamankamil123"
          email="rachmankamil121@gmail.com"
        />
        <div className=" flex mt-5 justify-end">
          <div
            onClick={togglePopup}
            className="w-16 h-6 px-1 py-0.5 bg-violet-700 bg-opacity-30 rounded-tl rounded-bl justify-center items-center gap-px inline-flex">
            <p className="text-blue-950 text-xs font-semibold leading-tight whitespace-nowrap">
              New Log
            </p>
          </div>
          <img
            onClick={showNewLog}
            src="src\assets\add doc.svg"
            className="p-1 bg-gradient-to-tr from-violet-900 to-violet-700 rounded justify-center items-center  inline-flex"
          />
        </div>
        <div className="mt-10">
          <CardLog />
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default MenteLog;
