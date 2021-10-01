import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <LogoWrapper>
        <Link to="/home">Secho&apos;s Beer Shop</Link>
      </LogoWrapper>
      <MenuNav>
        <NavLink to="/beerlist">Beer List</NavLink>
        <NavLink to="/cartview">My Cart</NavLink>
      </MenuNav>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: white;
  padding: 0px 30px;
  z-index: 9999;
  border-bottom: 1px solid rgb(243, 245, 248);
  -webkit-box-shadow: 0px 6px 10px -4px #c2c2c2;
  box-shadow: 0px 6px 10px -4px #c2c2c2;
  & a.active,
  & a:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const MenuNav = styled.nav`
  display: flex;
  gap: 20px;
`;

const LogoWrapper = styled.div`
  & > a {
    font-size: 1.5em;
  }
`;
