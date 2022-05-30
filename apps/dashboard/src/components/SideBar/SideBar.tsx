import { useState } from 'react';

export const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(true);

  return showSideBar ? (
    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg  bg-white">
      SideBar
    </div>
  ) : (
    <div className="w-0 dark:bg-secondary-dark-bg ">IconSideBar</div>
  );
};
