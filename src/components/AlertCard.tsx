
import React from 'react';

const AlertCard = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-96 h-64 p-6 rounded-lg shadow-md flex flex-col justify-between">
        <p className="text-lg font-semibold">{message}</p>
        <div className="mt-6 flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;