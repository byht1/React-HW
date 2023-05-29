import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Link = styled(NavLink)`
  font-family: 'Orbitron', sans-serif;
  font-size: 26px;
  color: #fff;

  &.active {
    color: red;
  }
  &:hover,
  &:focus {
    color: red;
  }
`;

export const Nav = styled.nav`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
