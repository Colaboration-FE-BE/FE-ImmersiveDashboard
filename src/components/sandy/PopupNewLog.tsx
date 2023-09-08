import React from "react";

const PopupNewLog = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative">
      <p className="self-stretch text-blue-950 text-xl font-bold leading-snug">
        New Log
      </p>
      <div className="">
        <label className=" text-blue-950 text-xs font-semibold">Status</label>
        <select className="border border-gray-300 rounded-lg p-2 w-full">
          <option value="Active ">Active</option>
          <option value="Placement">Placement</option>
          <option value="Placement">Greduates</option>
        </select>
      </div>
      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
        <label className="text-blue-950 text-xs font-semibold">Feedback</label>
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
  );
};

export default PopupNewLog;
