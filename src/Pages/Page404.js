import { PageTemplate } from "Components/Common";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Page404 = () => {
  return (
    <Container>
      <h1>You&apos;ve found a page that doesn&apos;t exist</h1>
      <Link to="/">Home</Link>
    </Container>
  );
};

export default Page404;

const Container = styled(PageTemplate)`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  & > a {
    font-size: 1.5em;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    padding: 5px;
    color: white;
    border-radius: 8px;
  }
`;
