import React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/system';

interface INavigationBar {
  toggleSidebar: () => void;
}

const NavBut = styled('button')({
  '&': {
    background: 'none',
    color: '#fff',
    border: 'none',
    borderRadius: '0px',
    fontSize: '16px',
    cursor: 'pointer',
    height: '60px',
    width: '20%',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

const Nav = styled(AppBar)({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-around',
  backgroundColor: '#533420',
  color: 'white',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '60px',
});

const NavigationBar: React.FC<INavigationBar> = ({ toggleSidebar }) => {
  return (
    <Nav>
      <div>
        <NavBut onClick={toggleSidebar}>Поиск</NavBut>
        <NavBut>Продукция</NavBut>
        <NavBut>Склады</NavBut>
        <NavBut>О нас</NavBut>
        <NavBut>Профиль</NavBut>
      </div>
    </Nav>
  );
};

export default NavigationBar;
