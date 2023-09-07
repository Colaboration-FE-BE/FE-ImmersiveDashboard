const Filter = () => {
  return (
    <div className=" grid grid-flow-row gap-4">
      <div className=" flex gap-3 justify-end">
        <div className=" px-3 py-1 bg-gray-300 rounded-lg justify-center items-center gap-1 inline-flex">
          <input
            placeholder="Search.."
            className=" rounded-lg p-1 text-slate-300 text-xs font-medium"
          />
          <img src="src\assets\Search.svg" className=" p-2 " />
        </div>
        <div className=" bg-gradient-to-tr from-violet-900 to-violet-700 rounded justify-center items-center gap-1 inline-flex">
          <img src="src\assets\add doc.svg" className=" w-9 h-6 " />
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <div className=" flex gap-5">
          <select className="w-44 h-10  rounded-md border border-gray-200">
            <option value="All Class">All Class</option>
            <option value="FE">FE</option>
            <option value="BE">BE</option>
            <option value="QE">QE</option>
          </select>
          <select className="w-44 h-10  rounded-md border border-gray-200">
            <option value="All Status">All Status</option>
            <option value="Active">Active</option>
            <option value="Graduated">Graduated</option>
            <option value="Placement">Placement</option>
          </select>
          <select className="w-44 h-10  rounded-md border border-gray-200">
            <option value="All Category">All Category</option>
            <option value="IT 1">IT</option>
            <option value="Non-IT">Non-IT</option>
          </select>
          <div className=" bg-gradient-to-tr from-violet-900 to-violet-700 rounded justify-center items-center gap-1 inline-flex">
            <img src="src\assets\filter.svg" className=" p-2 pe-0 " />
            <p className=" text-white font-semibold p-2">Filter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
