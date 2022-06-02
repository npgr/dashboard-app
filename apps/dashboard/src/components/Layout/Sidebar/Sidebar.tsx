import { useLayoutContext } from '../LayoutContext';
import { ClosedSidebar, StyledSidebar } from './Sidebar.styles';

export const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useLayoutContext();

  const showSidebar = () => setActiveMenu(true);
  const hideSidebar = () => setActiveMenu(false);

  return activeMenu ? (
    <StyledSidebar>
      <div onClick={hideSidebar}>SideBar</div>
    </StyledSidebar>
  ) : (
    <ClosedSidebar>
      <div onClick={showSidebar}>IconSideBar</div>
    </ClosedSidebar>
  );
};
