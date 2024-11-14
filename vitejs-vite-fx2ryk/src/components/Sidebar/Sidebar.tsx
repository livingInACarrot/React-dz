import React from 'react';
import './styles.css';
import { Categories } from '/src/entities/Categories.ts';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const CategoryOptions = Object.keys(Categories) as Array<
    keyof typeof Categories
  >;
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <input type="text" placeholder="Поиск" className="sidebar-item" />
      <label className="sidebar-item">
        В наличии <input type="checkbox" />
      </label>
      <select className="sidebar-item">
        <option value="">Любая категория</option>
        {CategoryOptions.map((cat) => (
          <option key={cat} value={Categories[cat]}>
            {Categories[cat]}
          </option>
        ))}
      </select>
    </aside>
  );
};

export default Sidebar;
