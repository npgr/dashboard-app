import React from 'react';
//{ FC, ReactNode, createContext, useContext, useState } from 'react'

interface LayoutContextData {
  activeMenu: boolean;
  setActiveMenu: (activeMenu: boolean) => void;
}

const LayoutContext = React.createContext<LayoutContextData>({
  activeMenu: false,
  setActiveMenu: (activeMenu) => null,
});

interface LayoutContextProviderProps {
  children: React.ReactNode;
}

export const LayoutContextProvider: React.FC<LayoutContextProviderProps> = ({
  children,
}) => {
  const [activeMenu, setActiveMenu] = React.useState(false);

  return (
    <LayoutContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const { activeMenu, setActiveMenu } = React.useContext(LayoutContext);
  return { activeMenu, setActiveMenu };
};
