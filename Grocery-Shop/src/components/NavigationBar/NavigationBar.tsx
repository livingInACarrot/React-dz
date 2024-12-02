import React from 'react';
import './styles.css';

interface INavigationBar {
  toggleSidebar: () => void;
}

const NavigationBar: React.FC<INavigationBar> = ({ toggleSidebar }) => {
  return (
    <nav className="navigation-bar">
      <button onClick={toggleSidebar}>Поиск</button>
      <button>Продукция</button>
      <button>Склады</button>
      <button>О нас</button>
      <button>Профиль</button>
    </nav>
  );
};

export default NavigationBar;
