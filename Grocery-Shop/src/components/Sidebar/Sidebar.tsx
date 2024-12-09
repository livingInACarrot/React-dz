import React from 'react';
import { Categories } from '/src/entities/Categories.ts';
import { ApplyFilters } from '../ProductList/ProductList.tsx';
import { styled } from '@mui/system';

interface SidebarProps {
  isOpen: boolean;
}

const clearSearch = (inputElement: HTMLInputElement | null): void => {
  if (inputElement) {
    inputElement.value = '';
  }
};

const resetCheckbox = (checkboxElement: HTMLInputElement | null): void => {
  if (checkboxElement) {
    checkboxElement.checked = false;
  }
};

const setDefaultCategory = (selectElement: HTMLSelectElement | null): void => {
  if (selectElement) {
    selectElement.value = selectElement.options[0].value;
  }
};

const resetAll = (
  inputElement: HTMLInputElement | null,
  checkboxElement: HTMLInputElement | null,
  selectElement: HTMLSelectElement | null
): void => {
  clearSearch(inputElement);
  resetCheckbox(checkboxElement);
  setDefaultCategory(selectElement);
};

const Search = (
  inputElement: HTMLInputElement | null,
  checkboxElement: HTMLInputElement | null,
  selectElement: HTMLSelectElement | null
): void => {
  if (inputElement && checkboxElement && selectElement) {
    ApplyFilters(
      inputElement.value,
      checkboxElement.checked,
      selectElement.value
    );
  }
};

const SideBar = styled('aside')({
  backgroundColor: '#f7f2ef',
  padding: 16,
  position: 'fixed',
  top: 60,
  left: 0,
  bottom: 0,
  width: '18%',
  transition: 'transform 0.3s ease-in-out',
  transform: 'translateX(-110%)',
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

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const CategoryOptions = Object.keys(Categories) as Array<
    keyof typeof Categories
  >;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const selectRef = React.useRef<HTMLSelectElement>(null);

  const handleClearSearch = (): void => {
    clearSearch(inputRef.current);
  };
  const handleSetDefaultCategory = (): void => {
    setDefaultCategory(selectRef.current);
  };
  const handleResetAll = (): void => {
    resetAll(inputRef.current, checkboxRef.current, selectRef.current);
  };
  const handleSearch = (): void => {
    Search(inputRef.current, checkboxRef.current, selectRef.current);
  };

  return (
    <SideBar
      style={
        isOpen
          ? { transform: 'translateX(0%)' }
          : { transform: 'translateX(-110%)' }
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
