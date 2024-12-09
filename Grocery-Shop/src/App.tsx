import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import ProductList from './components/ProductList/ProductList.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <NavigationBar toggleSidebar={toggleSidebar} />
      <div
        style={{
          display: 'flex',
          flexGrow: '1',
          transition: 'margin-left 0.3s ease-in-out',
          marginLeft: '0',
          backgroundColor: '#c29f89',
        }}
      >
        <Sidebar isOpen={isSidebarOpen} />
        <ProductList />
      </div>
    </div>
  );
};

export default App;
