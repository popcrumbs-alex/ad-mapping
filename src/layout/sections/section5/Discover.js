import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../App";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10rem 0;
  align-items: center;
  position: relative;
  overflow: visible;
`;
const Inner = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 760px) {
    width: 90%;
  }
`;
const Heading = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  color: ${(props) => props.color};
  position: relative;
  overflow: visible;
  margin: 1rem 0;
  @media screen and (max-width: 760px) {
    font-size: 2rem;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  place-items: center;
  @media screen and (max-width: 760px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  line-height: 2;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  color: ${(props) => props.color};
  @media screen and (max-width: 760px) {
    font-size: 1rem;
  }
`;
const Image = styled.img`
  object-fit: contain;
  max-width: 500px;
  @media screen and (max-width: 760px) {
    max-width: 90%;
  }
`;
const Discover = (props) => {
  const context = useContext(ThemeContext);
  const { state } = context;
  return (
    <Section>
      <Inner>
        <Container>
          <Column>
            <Heading color={state.colors.main}>
              Get discovered by clients with CarPlay
            </Heading>
            <Text color={state.colors.dark}>
              CarPlay is a smarter, safer way for customers to use their
              smartphones while driving to find your business location with
              ease. It is found in more than 500 models, from a Toyota all the
              way to a Porsche. Local businesses have a huge opportunity to
              reach new customers daily with the search engine features built
              into the major navigation applications that millions of people
              use. Do not lose out on the opportunity to gain new traffic. 
            </Text>
          </Column>
          <Column>
            <Image src="https://ik.imagekit.io/usam13ogl7u/carplay_BVnb3uj-D6Ih.png?updatedAt=1637679976932" />
          </Column>
        </Container>
      </Inner>
    </Section>
  );
};

Discover.propTypes = {};

export default Discover;
