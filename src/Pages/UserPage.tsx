import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Navbar from '../component/Navbar';
import Header from '../component/Header';
import AlertCard from '../component/AlertCard'; // Import komponen AlertCard

const Table = () => {
  const [data, setData] = useState([
    { id: 1, fullName: 'John Doe', email: 'johndoe@example.com', team: 'Tim A', role: 'Pegawai', status: 'Aktif' },
    { id: 2, fullName: 'Jane Smith', email: 'janesmith@example.com', team: 'Tim B', role: 'Manajer', status: 'Tidak Aktif' },
  ]);

  const [showAlert, setShowAlert] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  const handleDelete = (itemId:any) => {
    setItemIdToDelete(itemId);
    setShowAlert(true);
  };

  const handleConfirmDelete = () => {
    // Lakukan penghapusan data di sini
    const updatedData = data.filter((item) => item.id !== itemIdToDelete);
    setData(updatedData);
    setShowAlert(false);
  };

  const handleCancelDelete = () => {
    setItemIdToDelete(null);
    setShowAlert(false);
  };

  return (
    <section className='grid grid-cols-2 md:grid-cols-5 gap-4'>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Header />
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
        <table className=" min-w-full table-auto">
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
        {showAlert && (
          <div className="mt-4">
            <AlertCard
              message="Apakah Anda yakin ingin menghapus data ini?"
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Table;
