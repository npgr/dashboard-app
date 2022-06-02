import { FC, ReactNode } from 'react';
import { Settings } from '../Settings';
import { Sidebar } from './Sidebar';
import { Menu } from './Menu';
import { LayoutContextProvider } from './LayoutContext';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContextProvider>
      <div className="flex relative dark:bg-main-dark-bg">
        <Settings />
        <Sidebar />
        <Menu />
        {children}
      </div>
    </LayoutContextProvider>
  );
};
