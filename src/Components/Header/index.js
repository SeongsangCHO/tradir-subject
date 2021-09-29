import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Container>
      <Nav>
        <Link to="/home">home</Link>
        <Link to="/beerlist">비어리스트</Link>
      </Nav>
    </Container>
  );
};

Header.propTypes = {};

export default Header;

const Container = styled.header`
  border: 1px solid black;
  height: 60px;
`;

const Nav = styled.nav``;
