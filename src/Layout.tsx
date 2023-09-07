import React, { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';

interface LayoutProps {
    children?: React.ReactNode;
  }

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
    <div className={`app-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
      {/* Komponen Sidebar diintegrasikan di sini */}
      <Sidebar isOpen={isSidebarOpen} />
    </div>
    <div className="md:col-span-1">
      <Header toggleSidebar={toggleSidebar} />
      <main>{children}</main>
    </div>
  </div>
   
  );
};

export default Layout;
