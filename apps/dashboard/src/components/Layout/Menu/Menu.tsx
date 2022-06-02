import { useLayoutContext } from '../LayoutContext';
import { StyledMenu } from './Menu.styles';

export const Menu = () => {
  const { activeMenu } = useLayoutContext();

  return (
    <StyledMenu active={activeMenu}>
      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
        Navbar
      </div>
    </StyledMenu>
  );
};
