'use client';

import { useState } from 'react';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';

import css from './LayoutNotes.module.css';

interface SidebarLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const SidebarLayout = ({ children, sidebar }: SidebarLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <button onClick={handleClick} className={css.menuBtn}>
        {isOpen ? (
          <GoSidebarCollapse size={20} />
        ) : (
          <GoSidebarExpand size={20} />
        )}
      </button>
      <div className={css.container}>
        <aside className={`${css.sidebar} ${!sidebarOpen && css.hideSidebar}`}>
          {sidebar}
        </aside>
        <div className={css.notesWrapper}>{children}</div>
      </div>
    </>
  );
};

export default SidebarLayout;
