import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 25 0 25;
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  margin: 5px 30px;
`

export const NavLinkContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`;

export const NavLink = styled(Link)`
        padding: 10px 15px;
        cursor: pointer;
`;