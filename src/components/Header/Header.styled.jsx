import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding-block: 20px;
  top: 0;
  left: 50%;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 36px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  padding: 8px 16px;
  color: ${(p) => p.theme.colors.black};
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;

  transition: border-color linear 0.3s;

  &:hover,
  &:focus,
  &.active {
    border-color: ${(p) => p.theme.colors.red};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 1.5;
  }
`;
