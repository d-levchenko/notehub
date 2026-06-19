import SidebarLayout from '@/components/SidebarMobile/SidebarLayout/SidebarLayout';

import { ReactNode } from 'react';

interface FilterOptionsProps {
  children: ReactNode;
  sidebar: ReactNode;
}

const FilterOptions = ({ children, sidebar }: FilterOptionsProps) => {
  return <SidebarLayout sidebar={sidebar}>{children}</SidebarLayout>;
};

export default FilterOptions;
