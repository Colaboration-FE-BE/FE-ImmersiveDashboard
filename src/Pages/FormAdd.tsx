import InputForm from "../components/InputForm";

const FormAdd = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className=" bg-white shadow-md p-4 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Form Add New Mente</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputForm title="Full Name" />
              </div>
              <div>
                <label>Gender</label>
                <select className="border border-gray-300 rounded-lg p-2 w-full">
                  <option value="Male ">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <InputForm title="Home Address" />
              </div>
              <div>
                <InputForm title="Email" />
              </div>
              <div>
                <InputForm title="Phone" />
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="dropdown">Status</label>
                <select className="border border-gray-300 rounded-lg p-2 w-full">
                  <option value="Active ">Active</option>
                  <option value="Placement">Placement</option>
                  <option value="Greduates">Greduates</option>
                </select>
              </div>
              <div>
                <label htmlFor="dropdown">Class</label>
                <select className="border border-gray-300 rounded-lg p-2 w-full">
                  <option value="FE">FE</option>
                  <option value="BE">BE</option>
                  <option value="QE">QE</option>
                </select>
              </div>
              <div>
                <InputForm title="Current Address" />
              </div>
              <div>
                <InputForm title="Telegram" />
              </div>
              <div>
                <InputForm title="Discord" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold my-3">Emergency Data</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <InputForm title="Name" />
            </div>
            <div>
              <InputForm title="Phone" />
            </div>
            <div>
              <label>Status</label>
              <select className="border border-gray-300 rounded-lg p-2 w-full">
                <option value="Active ">Orang Tua</option>
                <option value="Placement">Kakek Nenek</option>
                <option value="Graduates">Saudara Orang Tua</option>
              </select>
            </div>
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormAdd;
