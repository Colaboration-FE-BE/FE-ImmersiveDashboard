import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Swal from 'sweetalert2';

interface User {
  id: number;
  full_name: string;
  email: string;
  team: string;
  role: string;
  status: boolean;
}

const Table: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const apiUrl =
    'https://immersive-dash-4-32uzyeupwa-as.a.run.app/users?page=1';

  useEffect(() => {
    fetch(apiUrl, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTQxNzg4ODYsInVzZXJJZCI6IjY5ZTY1MmRlLTZjZTMtNDU5OS05MDgwLWY4OTFlNTNjZmIzNyJ9.Ktj9Zo7wrcF5Gs85vUg15V9mUo_jeqWSuragCsmOwhc',
      },
    })
      .then((response) => response.json())
      .then((result) => {

        const formattedData = result.data.map((item: any, index: number) => ({
          ...item,
          id: index + 1,
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);


  const handleDelete = (itemId: number) => {
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

        fetch(
          `https://immersive-dash-4-32uzyeupwa-as.a.run.app/users/${itemId}`,
          {
            method: 'DELETE',
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTQxNzg4ODYsInVzZXJJZCI6IjY5ZTY1MmRlLTZjZTMtNDU5OS05MDgwLWY4OTFlNTNjZmIzNyJ9.Ktj9Zo7wrcF5Gs85vUg15V9mUo_jeqWSuragCsmOwhc',
            },
          }
        )
          .then((response) => {
            if (response.ok) {
 
              const updatedData = data.filter((item) => item.id !== itemId);
              setData(updatedData);
              Swal.fire('Terhapus!', 'Data telah dihapus.', 'success');
            } else {
              console.error('Error deleting data:', response.status, response.statusText);
              Swal.fire('Gagal!', 'Terjadi kesalahan saat menghapus data.', 'error');
            }
          })
          .catch((error) => {
            console.error('Error deleting data: ', error);
            Swal.fire('Gagal!', 'Terjadi kesalahan saat menghapus data.', 'error');
          });
      }
    });
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <Link
          to="/newuser"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tambah
        </Link>
        <input
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder="Cari..."
        />
      </div>
      <table className="table-auto border-separate border-spacing-2 border">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">No</th>
            <th className="border border-slate-300 p-2">Full Name</th>
            <th className="border border-slate-300 p-2">Email</th>
            <th className="border border-slate-300 p-2">Team</th>
            <th className="border border-slate-300 p-2">Role</th>
            <th className="border border-slate-300 p-2">Status</th>
            <th className="border border-slate-300 p-2">Aksi</th>
          </tr>
        </thead>
        <tbody className="hover:bg-slate-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.full_name}</td>
              <td className="p-2">{item.email}</td>
              <td className="p-2">{item.team}</td>
              <td className="p-2">{item.role}</td>
              <td className="p-2">{item.status ? 'Aktif' : 'Tidak Aktif'}</td>
              <td className="flex border px-4 py-2 justify-center items-center h-20">
                <Link
                  to={`/updateuser/${item.id}`}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
                <span className='ml-2 text-red-500 hover:text-red-700 cursor-pointer'>
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDelete(item.id)}
                  />
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
