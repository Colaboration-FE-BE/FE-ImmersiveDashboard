import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Layout from '../Layout';

const Table = () => {
  const [data, setData] = useState([
    { id: 1, className: 'Class A', startDate: '2023-01-01', graduate: 'Yes', mentor: 'John Doe' },
    { id: 2, className: 'Class B', startDate: '2023-02-01', graduate: 'No', mentor: 'Jane Smith' },
  ]);

  const handleDelete = (itemId:any) => {
    // Tampilkan SweetAlert untuk konfirmasi penghapusan
    Swal.fire({
      title: 'Konfirmasi',
      text: 'Apakah Anda yakin ingin menghapus data ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
    }).then((result) => {
      if (result.isConfirmed) {
        // Jika pengguna mengonfirmasi penghapusan, lakukan penghapusan di sini
        const updatedData = data.filter((item) => item.id !== itemId);
        setData(updatedData);
        Swal.fire('Terhapus!', 'Data telah dihapus.', 'success');
      }
    });
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <Link to="/newuser" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Tambah
        </Link>
        <input
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder="Cari..."
        />
      </div>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Nama Class</th>
            <th className="border px-4 py-2">Start Date</th>
            <th className="border px-4 py-2">Graduate</th>
            <th className="border px-4 py-2">Mentor</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.className}</td>
              <td className="border px-4 py-2">{item.startDate}</td>
              <td className="border px-4 py-2">{item.graduate}</td>
              <td className="border px-4 py-2">{item.mentor}</td>
              <td className="flex border px-4 py-2 justify-center items-center h-20">
                <Link to={`/updateuser/`} className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
                <span className="ml-2 text-red-500 hover:text-red-700 cursor-pointer">
                  <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item.id)} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Table;
