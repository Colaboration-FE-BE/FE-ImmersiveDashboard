import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

// Definisikan tipe ItemType
type ItemType = {
  id: number;
  className: string;
  startDate: string;
  graduate: string;
  mentor: string;
};

const EditCard = ({ item, onSave, onCancel }: { item: ItemType; onSave: (editedItem: ItemType) => void; onCancel: () => void }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleSave = async () => {
    try {
      // Buat permintaan HTTP PUT ke API Anda
      const response = await axios.put(
        `https://immersive-dash-4-32uzyeupwa-as.a.run.app/class/${editedItem.id}`,
        editedItem, // Data yang ingin Anda perbarui
        { 
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTQxNjgxOTEsInVzZXJJZCI6IjYzNzAxOWJiLWRkNmItNGIzYy1hYjk5LWUzYzhhOTU0OWYwNiJ9.1j41vt9t1iYTLQJ2tl0WA8qLjfj8I42oO5Lr8lTEwdE`,
          },
        }
      );

      // Periksa jika edit berhasil atau tidak
      if (response.status === 200) {
        // Panggil fungsi onSave dengan data yang telah diubah
        onSave(editedItem);
        Swal.fire('Tersimpan!', 'Data telah diperbarui.', 'success');
      } else {
        Swal.fire('Gagal!', 'Terjadi kesalahan saat mengedit data.', 'error');
      }
    } catch (error) {
      console.error('Error editing data:', error);
      Swal.fire('Gagal!', 'Terjadi kesalahan saat mengedit data.', 'error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // Menangani perubahan nilai dalam input/select
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  return (
    <div className="card">
      <div className="mx-10 my-10">
        <h5 className="font-bold my-5 mx-5">Update Class</h5>
        <form>
          <div className="mb-6 flex">
            <div className="flex-grow mr-4">
              <label htmlFor="editClassName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama Class
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="editClassName"
                name="className"
                value={editedItem.className}
                onChange={handleChange}
              />
            </div>
            <div className="flex-grow">
              <label htmlFor="editStartDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Start Date
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="editStartDate"
                name="startDate"
                value={editedItem.startDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-6 flex">
            <div className="flex-grow mr-4">
              <label htmlFor="editGraduate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Graduate
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="editGraduate"
                name="graduate"
                value={editedItem.graduate}
                onChange={handleChange}
              />
            </div>
            <div className="flex-grow">
              <label htmlFor="editMentor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Mentor
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="editMentor"
                name="mentor"
                value={editedItem.mentor}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="button" className="bg-blue-500 text-white rounded-md ml-auto" onClick={handleSave}>
              Update
            </button>
            <button type="button" className="bg-blue-500 text-white rounded-md ml-4" onClick={onCancel}>
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCard;
