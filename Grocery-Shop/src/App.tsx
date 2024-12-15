import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import ProductList from './components/ProductList/ProductList.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import productsJson from './data/products.json';
import { IFilter, IProduct } from './entities/IProduct.ts';
import { Pagination } from '@mui/material';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [products, setProducts] = useState<IProduct[]>(productsJson);
  const [filter, setFilter] = useState<IFilter>({
    title: '',
    onStock: false,
    category: ''
  })

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
        <Sidebar 
          toggleSidebar={toggleSidebar} 
          setFilter={setFilter} 
          isOpen={isSidebarOpen} 
        />
        <ProductList 
          filter={filter} 
          products={products} 
        />
        
      </div>
    </div>
  );
};

export default App;
