import React, { useState, useEffect } from 'react';

// Definisikan tipe ItemType
type ItemType = {
  id: number;
  className: string;
  startDate: string;
  graduate: string;
  mentor: string;
};

const EditCard = ({ item, onSave, onCancel }: { item: ItemType; onSave: (editedItem: ItemType) => void; onCancel: () => void }) => {
  // Menggunakan useState untuk menginisialisasi editedItem
  const [editedItem, setEditedItem] = useState(item);

  // Menggunakan useEffect untuk mengupdate editedItem saat item berubah
  useEffect(() => {
    setEditedItem(item);
  }, [item]);

  const handleSave = () => {
    onSave(editedItem);
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
              Simpan
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
