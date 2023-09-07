import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Table = () => {
  const [data, setData] = useState([
    { id: 1, fullName: 'John Doe', email: 'johndoe@example.com', team: 'Tim A', role: 'Pegawai', status: 'Aktif' },
    { id: 2, fullName: 'Jane Smith', email: 'janesmith@example.com', team: 'Tim B', role: 'Manajer', status: 'Tidak Aktif' },
    // Tambahkan data lainnya di sini
  ]);

  return (
    <div className="container mx-auto mt-4">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tambah</button>
        <input
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder="Cari..."
        />
      </div>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Team</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.fullName}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">{item.team}</td>
              <td className="border px-4 py-2">{item.role}</td>
              <td className="border px-4 py-2">{item.status}</td>
              <td className="border px-4 py-2">
                <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  <FontAwesomeIcon icon={faEdit} />
                </span>
                <span className="ml-2 text-red-500 hover:text-red-700 cursor-pointer">
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;













// import React, { useState } from 'react';

// interface TableRow {
//   kolom1: string;
//   kolom2: string;
//   kolom3: string;
//   kolom4: string;
//   kolom5: string;
//   kolom6: string;
// }

// const SampleTable: React.FC = () => {
//   const generateRandomData = () => {
//     // Fungsi ini akan menghasilkan data acak untuk setiap kolom
//     return {
//       kolom1: `Data 1 - ${Math.floor(Math.random() * 100)}`,
//       kolom2: `Data 2 - ${Math.floor(Math.random() * 100)}`,
//       kolom3: `Data 3 - ${Math.floor(Math.random() * 100)}`,
//       kolom4: `Data 4 - ${Math.floor(Math.random() * 100)}`,
//       kolom5: `Data 5 - ${Math.floor(Math.random() * 100)}`,
//       kolom6: `Data 6 - ${Math.floor(Math.random() * 100)}`,
//     };
//   };

//   const [data, setData] = useState<TableRow[]>([generateRandomData()]);

//   const [searchText, setSearchText] = useState<string>("");
//   const [newData, setNewData] = useState<TableRow>(generateRandomData());

//   const handleEdit = (rowIndex: number) => {
//     // Implementasi logika edit di sini
//     const editedData = [...data];
//     // Edit data di dalam editedData
//     setData(editedData);
//   };

//   const handleDelete = (rowIndex: number) => {
//     // Implementasi logika hapus di sini
//     const updatedData = [...data];
//     updatedData.splice(rowIndex, 1);
//     setData(updatedData);
//   };

//   const handleAdd = () => {
//     // Implementasi logika tambah data di sini
//     const updatedData = [...data, generateRandomData()];
//     setData(updatedData);
//     setNewData(generateRandomData());
//   };

//   // Filter data berdasarkan searchText
//   const filteredData = data.filter((row) =>
//     Object.values(row).some((value) =>
//       value.toLowerCase().includes(searchText.toLowerCase())
//     )
//   );

//   return (
//     <div className="container mx-auto p-4">
//       <div className="mb-4 flex justify-between items-center">
//         <div>
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             onClick={handleAdd}
//           >
//             Tambah
//           </button>
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Cari..."
//             className="border border-gray-300 rounded-lg py-2 px-4"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//         </div>
//       </div>
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               No
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Full Name
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Email
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               team
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Role
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Status
//             </th>

//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Aksi
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {filteredData.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               <td className="px-6 py-4 whitespace-nowrap">{row.kolom1}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{row.kolom2}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{row.kolom3}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{row.kolom4}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{row.kolom5}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{row.kolom6}</td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <button
//                   className="text-indigo-600 hover:text-indigo-900"
//                   onClick={() => handleEdit(rowIndex)}
//                 >
//                   Edit
//                 </button>
//                 <span className="mx-2">|</span>
//                 <button
//                   className="text-red-600 hover:text-red-900"
//                   onClick={() => handleDelete(rowIndex)}
//                 >
//                   Hapus
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SampleTable;
