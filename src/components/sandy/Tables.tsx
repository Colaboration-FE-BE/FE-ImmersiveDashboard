import { useNavigate } from "react-router-dom";

const Tables = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/MenteLog");
  };

  return (
    <table className="  bg-white  table-auto border-separate border-spacing-2 border">
      <thead>
        <tr className="text-slate-500">
          <th className="border border-slate-300 p-2 ">No</th>
          <th className="border border-slate-300 p-2">Full Name</th>
          <th className="border border-slate-300 p-2">Class</th>
          <th className="border border-slate-300 p-2">Status</th>
          <th className="border border-slate-300 p-2">Category</th>
          <th className="border border-slate-300 p-2">Gender</th>
          <th className="border border-slate-300 p-2">Aksi</th>
        </tr>
      </thead>
      <tbody className=" hover:bg-slate-200">
        <tr className="text-slate-500">
          <td className=" p-2">1</td>
          <td className=" p-2 text-slate-500 font-semibold">Mahmud Karima</td>
          <td className=" p-2">FE</td>
          <td className=" p-2">Active</td>
          <td className=" p-2">User</td>
          <td className=" p-2">Pria</td>
          <td className=" flex gap-1 hover:bg-white">
            <button
              onClick={handleClick}
              className=" bg-sky-100 hover:bg-sky-200">
              <img src="src\assets\Detail.svg" alt="" />
            </button>
            <button className=" bg-indigo-500 hover:bg-indigo-600 ">
              <img src="src\assets\Edit.svg" alt="" />
            </button>
            <button className=" bg-orange-600 hover:bg-orange-700">
              <img src="src\assets\Hapus.svg" alt="" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Tables;
