import { FC, ReactNode } from 'react';

interface StyledProps {
  onClick?: (event: MouseEvent) => void;
  children: ReactNode;
}

export const StyledSidebar: FC<StyledProps> = ({ children }) => (
  <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg  bg-white">
    {children}
  </div>
);

export const ClosedSidebar: FC<StyledProps> = ({ children }) => (
  <div className="w-0 dark:bg-secondary-dark-bg ">{children}</div>
);
