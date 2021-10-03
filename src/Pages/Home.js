import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PageTemplate, Footer } from "Components/Common";
import { BorderBottom } from "styles/Mixin";
import LandingTop from "assets/landingtop.jpeg";

const Home = () => {
  return (
    <HomePageTemplate>
      <TopContainer>
        <ImageWrapper>
          <LandingTopImage src={LandingTop} alt="landing top image" />
        </ImageWrapper>
        <IntroContainer>
          <IntroText>Welcome to Secho&apos;s Beer shop</IntroText>
          <Link to="/beerlist">👉 Beer List </Link>
        </IntroContainer>
      </TopContainer>
      <Footer />
    </HomePageTemplate>
  );
};

export default Home;
const TopContainer = styled.section`
  display: flex;
  position: relative;
  height: calc(100vh - 76px);
`;
const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  & a {
    position: relative;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5em;
    ${BorderBottom("5px", "primary")}
    padding: 10px;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
  animation-name: fade;
  animation-duration: 1s;
  @keyframes fade {
    from {
      opacity: 0;
      margin-top: 50px;
    }
    to {
      opacity: 1;
      margin-top: 0px;
    }
  }
`;
const IntroText = styled.h1`
  color: white;
  font-size: 1.5em;
  white-space: nowrap;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const LandingTopImage = styled.img`
  max-height: 100%;
  object-fit: cover;
  filter: brightness(75%);
  opacity: 0.8;
`;

const HomePageTemplate = styled(PageTemplate)`
  padding: 0;
  width: 100%;
  max-width: 100%;
`;
