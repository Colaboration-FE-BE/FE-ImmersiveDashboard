import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-200 my-5" style={{ width: '1080px' }}>
      <div className="  container mx-auto py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              type="button"
              className=" border-0 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => {
               
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Search icon */}
              </svg>
            </button>
            <input
              type="text"
              className="ml-2 border border-gray-300 rounded-lg p-2 focus:outline-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
          <div className="flex items-center">
            <a
              className="nav-link dropdown-toggle hide-arrow"
              href="javascript:void(0);"
              data-bs-toggle="dropdown"
            >
              <div className="avatar avatar-online">
                <img
                  src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/avatars/1.png"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-right">
             
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
