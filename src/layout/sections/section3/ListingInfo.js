import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../App";
const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 0;
  align-items: center;
`;
const Inner = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 760px) {
    width: 90%;
  }
`;
const Heading = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  color: ${(props) => props.color};
  position: relative;
  overflow: visible;
  &:before {
    content: "";
    background: url(https://ik.imagekit.io/usam13ogl7u/dots_6P5djFTzTf.png?updatedAt=1637606890888);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    height: 450px;
    width: 450px;
    position: absolute;
    top: -120%;
    left: -10%;
    z-index: -1;
  }
  @media screen and (max-width: 760px) {
    font-size: 2rem;
    &:before {
      height: 250px;
      width: 250px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  @media screen and (max-width: 760px) {
    flex-direction: column;
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
const Text = styled.p`
  line-height: 2;
  font-family: Roboto, sans-serif;
  max-width: 500px;
  font-weight: 600;
  font-size: 1.3rem;
  color: ${(props) => props.color};
  margin-left: 2rem;
  @media screen and (max-width: 760px) {
    font-size: 1rem;
  }
`;

const ListingInfo = (props) => {
  const context = useContext(ThemeContext);
  const { state } = context;

  return (
    <Section>
      <Inner>
        <Heading color={state.colors.main}>
          Why map listings matter to your business
        </Heading>
        <Container>
          <Column>
            <img
              src="https://ik.imagekit.io/usam13ogl7u/iphone-thing_dB9iceVQZh7.png?updatedAt=1637606254023"
              alt="phone"
            />
          </Column>
          <Column>
            <Text color={state.colors.dark}>
              More than ever customers are using maps and navigation apps to
              find information about local businesses. It is expected that 67.6%
              of smartphone users will use navigation maps by 2021.{" "}
            </Text>
            <Text color={state.colors.dark}>
              No matter what they are looking for – it may be a restaurant, a
              barber shop or a gas station – customers can find their next
              destination through a simple search on Google Maps, Waze, Apple
              Maps, Here, Bing, or CarPlay. Users can check businesses’
              information such as reviews, store hours, restaurant menus, and
              booking options.
            </Text>
          </Column>
        </Container>
      </Inner>
    </Section>
  );
};

ListingInfo.propTypes = {};

export default ListingInfo;
