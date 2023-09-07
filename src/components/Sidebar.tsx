import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faUser, faSchool } from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [pathname, setPathname] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav
      id="layout-menu"
      className={`layout-menu h-screen w-full pl-10 pr-10  menu-vertical menu bg-menu-theme ${
        isOpen ? 'layout-menu-expanded' : ''
      }`}
      data-bg-class="bg-menu-theme"
    >
      <div style={{ backgroundColor: 'white', borderRightWidth: 20, height: '100vh'}}>
        <div className="app-brand demo" style={{ minHeight: 150 }}>
          <Link to="/dashboard" className="app-brand-link">
            <span className="mx-5 mr-5  bg-red-500">
              <img style={{ width: '150px' }} src={logo} alt="Logo" />
            </span>
            <span className="app-brand-text demo menu-text fw-bolder ms-2">
              {/* Altera Academy */}
            </span>
          </Link>
          <a
            onClick={() => setIsOpen(!isOpen)}
            className="layout-menu-toggle menu-link text-large ms-auto d-xl-none"
            style={{ color: 'red' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.707 14.293-1.414 1.414L7.586 12l5.707-5.707 1.414 1.414L10.414 12l4.293 4.293z" />
            </svg>
          </a>
        </div>

        <div className="menu-inner-shadow" />
        <ul className="menu-inner py-1 ps ps--active-y">
          <li
            className={`menu-item ${pathname === '/dashboard' ? 'active' : ''} hover:bg-gray-300 hover:rounded`}
          >
            <Link to="/dashboard" className="menu-link">
              <span className="flex items-center mb-3 mt-3">
                <FontAwesomeIcon icon={faDashboard} className="mr-2" />
                <div data-i18n="Analytics">Dashboard</div>
              </span>
            </Link>
          </li>
          <li
            className={`menu-item ${pathname === '/user' ? 'active' : ''} hover:bg-gray-300 hover:rounded`}
          >
            <Link to="/Mentee" className="menu-link">
              <span className="flex items-center mb-3 mt-3">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                <div data-i18n="Analytics">Mentee</div>
              </span>
            </Link>
          </li>
          <li
            className={`menu-item ${pathname === '/mentee' ? 'active' : ''} hover:bg-gray-300 hover:rounded`}
          >
            <Link to="/page" className="flex">
              <span className="flex items-center mb-3 mt-3">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                <div data-i18n="Analytics">User</div>
              </span>
            </Link>
          </li>
          <li
            className={`menu-item ${pathname === '/class' ? 'active' : ''} hover:bg-gray-300 hover:rounded`}
          >
            <Link to="/classpage" className="flex">
              <span className="flex items-center mb-3 mt-3">
                <FontAwesomeIcon icon={faSchool} className="mr-2" />
                <div data-i18n="Analytics">Class</div>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>


      
  );
};

export default Sidebar;
