import { darken } from "polished";
import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../App";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url("https://ik.imagekit.io/usam13ogl7u/hero-bg_F3kEIpuyl.jpg?updatedAt=1635525068904");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 60vh;
`;
const Inner = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  gap: 2rem;
  @media screen and (max-width: 760px) {
    width: 90%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 4rem 0;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  & img {
    object-fit: contain;
    max-width: 500px;
  }
  @media screen and (max-width: 760px) {
    & img {
      max-width: 90%;
    }
  }
`;
const Heading = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin: 0.2rem 0;
  line-height: 1.2;
  @media screen and (max-width: 760px) {
    font-size: 2.2rem;
  }
`;
const HeadingTwo = styled.h2`
  font-size: 1.5rem;
  color: #eee;
  margin: 0.2rem 0;
  margin-left: 0.3rem;
  font-weight: 500;
  line-height: 1.4;
  @media screen and (max-width: 760px) {
    font-size: 1.2rem;
  }
`;
const SubHeading = styled.h4`
  color: #ccc;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0.2rem 0;
  font-weight: 300;
  max-width: 70%;
  margin-left: 0.3rem;
  @media screen and (max-width: 760px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const Button = styled.button`
  max-width: 250px;
  background: ${(props) => props.color};
  color: #fff;
  border-radius: 160px;
  border: 0;
  padding: 1rem 2rem;
  font-family: Roboto;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 1rem 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${(props) => darken(0.1, props.color)};
  }
`;

const Hero = () => {
  const context = useContext(ThemeContext);
  const { state } = context;
  const scrollToForm = (ref) => {
    if (ref !== null) {
      ref.current.scrollIntoView({
        top: "0",
        behavior: "smooth",
      });
    }
  };

  return (
    <Section>
      <Inner>
        <Column>
          <Heading>
            Can I Map
            <br /> Your Business?
          </Heading>
          <HeadingTwo>Get Traffic Routed To Your Business</HeadingTwo>

          <SubHeading>
            Services Like Google Maps and Waze are used by 10's of millions of
            people EVERY DAY!
          </SubHeading>
          <Button
            color={state.colors.accent}
            data-secondary-color={state.colors.secondary}
            onClick={() => scrollToForm(state.formSection)}
          >
            Get Started!
          </Button>
        </Column>
        <Column>
          <img
            src="https://ik.imagekit.io/usam13ogl7u/hero-column-img_wWxQzKgmy.png?updatedAt=1635526034181"
            alt="ad map"
          />
        </Column>
      </Inner>
    </Section>
  );
};

Hero.propTypes = {};

export default Hero;
