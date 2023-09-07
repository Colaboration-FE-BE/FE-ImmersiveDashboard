import React, { useState } from "react";

import CardMente from "../components/sandy/CardMente";
import CardLog from "../components/sandy/CardLog";

const MenteLog = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className=" container justify-center m-5">
      <div className=" flex gap-3">
        <img src="src\assets\Back.svg" />
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
            className="w-16 h-6 px-1 py-0.5 bg-violet-700 bg-opacity-30 rounded-tl rounded-bl justify-center items-center gap-px inline-flex"
          >
            <p className="text-blue-950 text-xs font-semibold leading-tight whitespace-nowrap">
              New Log
            </p>
          </div>
          <img
            src="src\assets\add doc.svg"
            className="p-1 bg-gradient-to-tr from-violet-900 to-violet-700 rounded justify-center items-center  inline-flex"
          />
        </div>
        <div className="mt-10">
          <CardLog />
        </div>
        {showPopup && (
          <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative">
            <p className="self-stretch text-blue-950 text-xl font-bold leading-snug">
              New Log
            </p>
            <div className="">
              <label className=" text-blue-950 text-xs font-semibold">
                Status
              </label>
              <select className="border border-gray-300 rounded-lg p-2 w-full">
                <option value="Active ">Active</option>
                <option value="Placement">Placement</option>
                <option value="Placement">Greduates</option>
              </select>
            </div>
            <div className="flex-col justify-start items-start gap-1.5 inline-flex">
              <label className="text-blue-950 text-xs font-semibold">
                Feedback
              </label>
              <input
                className=" w-96 h-40 bg-neutral-50 rounded shadow-inner"
                type="text"
              />
            </div>
            <div className=" flex mt-5 ">
              <div className="w-16 h-6 px-1 py-0.5 me-3 bg-violet-700 bg-opacity-30 rounded justify-center items-center gap-px inline-flex">
                <p className="text-blue-950 text-xs font-semibold leading-tight whitespace-nowrap">
                  Cancel
                </p>
              </div>
              <div className="w-16 h-6 px-1 py-0.5 bg-violet-700 bg-opacity-30 rounded-tl rounded-bl justify-center items-center gap-px inline-flex">
                <p className="text-blue-950 text-xs font-semibold leading-tight whitespace-nowrap">
                  Save
                </p>
              </div>
              <img
                src="src\assets\save.svg"
                className="p-1 bg-gradient-to-tr from-violet-900 to-violet-700 rounded justify-center items-center  inline-flex"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenteLog;
