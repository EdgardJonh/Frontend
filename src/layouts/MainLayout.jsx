import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Breadcrumbs from '../components/Breadcrumbs';
import Notification from '../components/Notification';

function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-grow">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Breadcrumbs path={location.pathname} />
          {children}
        </main>
      </div>
      <Footer />
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  );
}

export default MainLayout;