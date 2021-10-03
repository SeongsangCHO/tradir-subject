import { GitHub } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Container>
      <span>Cho seong sang</span>
      <a
        href="https://github.com/SeongsangCHO/tradir-subject"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub />
      </a>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 10px;
`;
