import React, { useState } from 'react';

import Navbar from '../component/Navbar';
import Header from '../component/Header';

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    FullName: '',
    Role: '',
    email: '',
    password: '',
    team: '', // Tambahkan properti untuk team
    Status: '', // Tambahkan properti untuk Status
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Lakukan sesuatu dengan formData, misalnya kirim ke server atau validasi
    console.log(formData);
  };

  return (
    <section className='flex justify-center items-center h-screen'>
        <Navbar/>

    <form onSubmit={handleSubmit}>
    <Header/>
      <div className="grid gap-6 mb-6 md:grid-cols-2 mt-40 ">

        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fullname</label>
          <input
            type="text"
            id="first_name"
            name="FullName"
            value={formData.FullName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
          <select
            id="role"
            name="Role"
            value={formData.Role}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option value="admin">Admin</option>
            <option value="default">Default</option>
          </select>
        </div>
        {/* Tambahkan input lainnya di sini */}
      </div>
      <div className="mb-6 flex">
        <div className="flex-1 mr-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="flex-1 ml-2">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
      </div>
      <div className="mb-6 flex">
        <div className="flex-grow">
          <label htmlFor="team" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Team</label>
          <select
            id="team"
            name="team"
            value={formData.team}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option value="Academic">Academic</option>
            <option value="People">People</option>
            <option value="Placement">Placement</option>
            <option value="Admission">Admission</option>
          </select>
        </div>
        <div className="ml-6 flex-grow">
          <label htmlFor="Status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
          <select
            id="Status"
            name="Status"
            value={formData.Status}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option value="active">active</option>
            <option value="Notactiv">Notactiv</option>
          </select>
        </div>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    </section>
  );
};

export default YourFormComponent;
