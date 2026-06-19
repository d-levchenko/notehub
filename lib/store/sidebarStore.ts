import { create } from 'zustand';

type SidebarStore = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

const useSidebarStore = create<SidebarStore>()(set => ({
  sidebarOpen: true,
  toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),
}));

export default useSidebarStore;
