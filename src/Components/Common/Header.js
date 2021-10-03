import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ShadowBottomLine } from "styles/Mixin";
import NotiCartItemCount from "Components/Cart/NotiCartItemCount";

const Header = () => {
  return (
    <Container>
      <LogoWrapper>
        <Link to="/home">Secho&apos;s Beer Shop</Link>
      </LogoWrapper>
      <MenuNav>
        <NavLink to="/beerlist">Beer List</NavLink>
        <CartLinkContainer>
          <NavLink to="/cartview">My Cart</NavLink>
          <NotiCartItemCount />
        </CartLinkContainer>
      </MenuNav>
    </Container>
  );
};

export default Header;

const CartLinkContainer = styled.div`
  position: relative;
`;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: white;
  padding: 0px 30px;
  z-index: 1;
  ${ShadowBottomLine}

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
