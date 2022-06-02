import { FC, ReactNode } from 'react';

interface StyledMenuProps {
  active: boolean;
  children: ReactNode;
}

export const StyledMenu: FC<StyledMenuProps> = ({ active, children }) => (
  <div
    className={`ml-10 dark:bg-main-bg bg-main-bg main-h-screen w-full ${
      active ? 'md:ml-72' : 'flex-2'
    }`}
  >
    {children}
  </div>
);
