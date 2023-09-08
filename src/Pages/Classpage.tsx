import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import Layout from "../Layout";
import EditCard from "../components/AlertCard";
import EditCard2 from "../components/Alertcard2";
import ReactDOM from "react-dom";

interface ItemType {
  id: number;
  name: string;
  pic: string;
  start_date: string;
  graduate_date: string;
}

const Table = () => {
  const [data, setData] = useState<ItemType[]>([]);
  const [editData, setEditData] = useState<ItemType | null>(null);
  const apiUrl = "https://immersive-dash-4-32uzyeupwa-as.a.run.app/class";
  useEffect(() => {


    // Mengambil data dari API saat komponen dimuat
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTQxNjgxOTEsInVzZXJJZCI6IjYzNzAxOWJiLWRkNmItNGIzYy1hYjk5LWUzYzhhOTU0OWYwNiJ9.1j41vt9t1iYTLQJ2tl0WA8qLjfj8I42oO5Lr8lTEwdE',
          },
        });

        // Mengonversi ID ke nomor terurut
        const formattedData = response.data.data.map((item: any, index: number) => ({
          ...item,
          id: index + 1,
        }));
    
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (item: ItemType) => {
    setEditData(item);

    Swal.fire({
      title: "Edit Data",
      html: "",
      showCancelButton: false,
      showConfirmButton: false,
      customClass: {
        popup: "p-0",
      },
      didOpen: () => {
        const editCardContainer = document.createElement("div");
        ReactDOM.render(
          <EditCard
            item={item}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />,
          editCardContainer
        );
        Swal.getPopup().appendChild(editCardContainer);
      },
    });
  };

  const handleTambahClick = () => {
    Swal.fire({
      title: "Tambah Data",
      html: "",
      showCancelButton: false,
      showConfirmButton: false,
      customClass: {
        popup: "p-0",
      },
      didOpen: () => {
        const editCardContainer = document.createElement("div");
        ReactDOM.render(
          <EditCard2
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
            item={{
              id: 0,
              name: "",
              pic: "",
              start_date: "",
              graduate_date: "",
            }}
          />,
          editCardContainer
        );
        Swal.getPopup().appendChild(editCardContainer);
      },
    });
  };

  const handleSaveEdit = async (editedItem: ItemType) => {
    try {
      // Kirim permintaan PUT atau PATCH ke API untuk menyimpan perubahan
      const response = await axios.put(
        `${apiUrl}/${editedItem.id}`,
        editedItem,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTQxNjgxOTEsInVzZXJJZCI6IjYzNzAxOWJiLWRkNmItNGIzYy1hYjk5LWUzYc29e74dca85be',
          },
        }
      );

  
      const updatedData = data.map((item) =>
        item.id === editedItem.id ? editedItem : item
      );
      setData(updatedData);

      Swal.close();
      Swal.fire("Tersimpan!", "Data telah diperbarui.", "success");
    } catch (error) {
      console.error("Error updating data:", error);
      Swal.fire("Error", "Terjadi kesalahan saat menyimpan data.", "error");
    }
  };

  const handleCancelEdit = () => {
    setEditData(null);
    Swal.close();
  };

  const handleDelete = (itemId: number) => {
    Swal.fire({
      title: "Konfirmasi",
      text: "Apakah Anda yakin ingin menghapus data ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          
          await axios.delete(`https://immersive-dash-4-32uzyeupwa-as.a.run.app/class/${itemId}`, {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTQxNzIxNzksInVzZXJJZCI6IjY1ZjRjY2FlLWNhMTgtNDU2Yy05YTBmLTAyYTQwYzJiNjMzZCJ9.CIeNI6DTK7u5hWjpclQ1_G2ToMpiyfMk_6Lc7mkhOB0',
            },
          });
  
   
          const updatedData = data.filter((item) => item.id !== itemId);
          setData(updatedData);
  
          Swal.fire("Terhapus!", "Data telah dihapus.", "success");
        } catch (error) {
          console.error("Error deleting data:", error);
          Swal.fire("Error", "Terjadi kesalahan saat menghapus data.", "error");
        }
      }
    });
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleTambahClick}
        >
          Tambah
        </button>
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
            <th className="border px-4 py-2">PIC</th>
            <th className="border px-4 py-2">Start Date</th>
            <th className="border px-4 py-2">Graduate Date</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.pic}</td>
              <td className="border px-4 py-2">
                {new Date(item.start_date).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">
                {new Date(item.graduate_date).toLocaleDateString()}
              </td>
              <td className="flex border px-4 py-2 justify-center items-center h-20">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleEdit(item);
                  }}
                >
                  Edit
                </a>
                <span className="ml-2 text-red-500 hover:text-red-700 cursor-pointer">
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
