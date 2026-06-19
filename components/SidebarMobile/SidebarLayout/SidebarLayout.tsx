'use client';

import useSidebarStore from '@/lib/store/sidebarStore';
import css from './LayoutNotes.module.css';
import { useState } from 'react';

interface SidebarLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const SidebarLayout = ({ children, sidebar }: SidebarLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarOpen = useSidebarStore(state => state.sidebarOpen);
  const toggleSidebar = useSidebarStore(state => state.toggleSidebar);

  const handleClick = () => {
    setIsOpen(!isOpen);
    toggleSidebar();
  };

  return (
    <>
      <button onClick={handleClick} className={css.menuBtn}>
        {isOpen ? 'Show sidebar' : 'Hide sidebar'}
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
