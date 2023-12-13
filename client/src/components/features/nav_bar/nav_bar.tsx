import React from 'react'
import { NavRoute } from './nav_bar_type';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: left;
  text-align: left;
  align-items: left;
  }
`;

const NavLinkWrapper = styled.div`
  display: flex;
  margin-right: 1.5em;

  & > * {
    text-decoration: none;
  }
`;

interface NavBarProps {
    routes: NavRoute[];
    heading?: string;
  }

const NavBar: React.FC<NavBarProps> = ({ routes,  heading}) => {
  return (
    <NavContainer>
    <HeadingWrapper>{heading}</HeadingWrapper>
    <NavLinkWrapper>
      {routes.map((route) => (
        <NavLinkWrapper key={route.id}>
          <NavLink to={route.path} style={({isActive}) => isActive ? {color: "red"} : {color: "blue"}}>
            <div>{route.name}</div>
          </NavLink>
        </NavLinkWrapper>
      ))}
    </NavLinkWrapper>
  </NavContainer>
  )
}

export default NavBar
