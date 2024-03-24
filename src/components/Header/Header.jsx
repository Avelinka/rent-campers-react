import { useLocation } from 'react-router-dom';
import { HeaderContainer, NavigationList, StyledLink } from './Header.styled';

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const headerStyle = {
    borderBottom: isHomePage ? '0' : '1px solid #E44848',
    position: isHomePage ? 'absolute' : 'static',
    backgroundColor: isHomePage ? 'transparent' : '#fff',
    transform: isHomePage ? 'translateX(-50%)' : 'none',
  };

  return (
    <HeaderContainer style={headerStyle}>
      <nav>
        <NavigationList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/catalog">Catalog</StyledLink>
          </li>
          <li>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </li>
        </NavigationList>
      </nav>
    </HeaderContainer>
  );
};
