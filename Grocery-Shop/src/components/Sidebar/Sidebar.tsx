import React from 'react';
import { Categories } from '../../entities/Categories.ts';
import { styled } from '@mui/system';
import { IFilter } from '../../entities/IProduct.ts';

interface SidebarProps {
  isOpen: boolean;
  setFilter: (arg: IFilter) => void;
  toggleSidebar: () => void;
}

const SideBar = styled('aside')({
  backgroundColor: '#f7f2ef',
  padding: 16,
  position: 'fixed',
  top: 60,
  left: 0,
  bottom: 0,
  width: '18%',
  transition: 'transform 0.3s ease-in-out',
  pointerEvents: 'auto',
  boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)',
  objectFit: 'cover',
  fontSize: '14px',
  fontFamily: 'Arial, Helvetica, sans-serif',
  borderRadius: '4px',
});

const ItemStyle = {
  height: '30px',
  display: 'block',
  marginBottom: '10px',
  border: 'none',
  color: '#857979',
  backgroundColor: '#fff',
  fontSize: '14px',
  fontFamily: 'Arial, Helvetica, sans-serif',
  borderRadius: '4px',
  width: '220px',
};

const B1 = styled('button')({
  height: '30px',
  display: 'block',
  marginBottom: '10px',
  border: 'none',
  color: '#857979',
  fontSize: '14px',
  fontFamily: 'Arial, Helvetica, sans-serif',
  borderRadius: '4px',
  width: '30px',
  backgroundColor: '#eee9e7',
  position: 'fixed',
  top: '16px',
  left: '250px',
});

const B2 = styled('button')({
  height: '30px',
  display: 'block',
  marginBottom: '10px',
  border: 'none',
  color: '#857979',
  fontSize: '14px',
  fontFamily: 'Arial, Helvetica, sans-serif',
  borderRadius: '4px',
  width: '30px',
  backgroundColor: '#eee9e7',
  position: 'fixed',
  top: '98px',
  left: '250px',
});

const BReset = {
  height: '30px',
  display: 'block',
  marginBottom: '10px',
  border: 'none',
  color: '#333',
  backgroundColor: '#eee9e7',
  fontSize: '14px',
  fontFamily: 'Arial, Helvetica, sans-serif',
  borderRadius: '4px',
  width: '268px',
};

const BSearch = {
  height: '30px',
  display: 'block',
  marginBottom: '10px',
  border: 'none',
  color: '#333',
  backgroundColor: '#ead4c6',
  fontSize: '14px',
  fontFamily: 'Arial, Helvetica, sans-serif',
  borderRadius: '4px',
  width: '268px',
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, setFilter }) => {
  const CategoryOptions = Object.keys(Categories) as Array<
    keyof typeof Categories
  >;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const selectRef = React.useRef<HTMLSelectElement>(null);

  const handleClearSearch = () => { //нет необходимости выносить логику из компонента
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  const handleSetDefaultCategory = () => {
    if (selectRef.current) {
      selectRef.current.value = CategoryOptions[0];
    }
  };

  const resetCheckbox = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  const handleResetAll = (): void => {
    handleClearSearch();
    handleSetDefaultCategory();
    resetCheckbox();
  };
  const handleSearch = (): void => {
    if (inputRef.current && checkboxRef.current && selectRef.current) {
      toggleSidebar();
      setFilter({
        title: inputRef.current.value,
        onStock: checkboxRef.current.checked,
        category: selectRef.current.value
      });
    }
  };

  return (
    <SideBar
      style={
        isOpen
          ? { display: 'block' }
          : { display: 'none' }
      }
    >
      <B1 onClick={handleClearSearch}>x</B1>
      <B2 onClick={handleSetDefaultCategory}>x</B2>
      <input type="text" placeholder="Поиск" ref={inputRef} style={ItemStyle} />
      <label style={ItemStyle}>
        В наличии
        <input ref={checkboxRef} type="checkbox" />
      </label>
      <select ref={selectRef} style={ItemStyle}>
        <option value="">Любая категория</option>
        {CategoryOptions.map((cat) => (
          <option key={cat} value={Categories[cat]}>
            {Categories[cat]}
          </option>
        ))}
      </select>
      <button onClick={handleResetAll} style={BReset}>
        Сбросить фильтры
      </button>
      <button onClick={handleSearch} style={BSearch}>
        Поиск
      </button>
    </SideBar>
  );
};

export default Sidebar;
