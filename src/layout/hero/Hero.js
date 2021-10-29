import React, { useContext } from "react";
import PropTypes from "prop-types";
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
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  gap: 2rem;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  & img {
    object-fit: contain;
    max-width: 500px;
  }
`;
const Heading = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin: 0.2rem 0;
  line-height: 1.5;
`;
const SubHeading = styled.h4`
  color: #ffffff75;
  font-size: 1.2rem;
  line-height: 2;
  margin: 0.2rem 0;
  font-weight: 300;
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
    background: ${(props) => props["data-secondary-color"]};
  }
`;

const Hero = () => {
  const context = useContext(ThemeContext);
  return (
    <Section>
      <Inner>
        <Column>
          <Heading>
            Business Ad
            <br /> Mapping - Get Traffic <br /> Routed To Your Business!
          </Heading>
          <SubHeading>
            Services Like Google Maps and Waze are used by 10's of millions of
            people EVERY DAY!
          </SubHeading>
          <Button
            color={context.colors.accent}
            data-secondary-color={context.colors.secondary}
          >
            Get Started!
          </Button>
        </Column>
        <Column>
          <img src="https://ik.imagekit.io/usam13ogl7u/hero-column-img_wWxQzKgmy.png?updatedAt=1635526034181" />
        </Column>
      </Inner>
    </Section>
  );
};

Hero.propTypes = {};

export default Hero;
