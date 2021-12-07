import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../App";
import { darken } from "polished";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 0;
  align-items: center;
  position: relative;
  overflow: visible;
  @media screen and (max-width: 760px) {
    overflow: hidden;
  }
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
  font-size: 4rem;
  color: ${(props) => props.color};
  position: relative;
  overflow: visible;
  text-align: center;
  @media screen and (max-width: 760px) {
    font-size: 2rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 760px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 20px #eee;
  padding: 2rem;
  background: #fff;
  border-radius: 5px;
`;

const CardInner = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;
const CardStat = styled.h2`
  color: ${(props) => props.color};
  text-align: center;
  font-size: 3rem;
  margin: 0.5rem 0;
`;

const CardText = styled.p`
  color: ${(props) => props.color};
  text-align: center;
  line-height: 2;
  font-size: 1rem;
  max-width: 90%;
  margin: 0.5rem 0;
`;

const CardSource = styled.p`
  color: ${(props) => props.color};
  text-align: center;
  margin: 0.5rem 0;
`;
const StartBtn = styled.button`
  color: #fff;
  background: ${(props) => props.color};
  border-radius: 120px;
  padding: 1rem 2rem;
  max-width: 300px;
  border: 0;
  font-size: 1.2rem;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${(props) => darken(0.1, props.color)};
  }
`;
const DecorationImg = styled.img`
  object-fit: contain;
  position: absolute;
  z-index: -1;
  height: 400px;
  width: 400px;
  top: ${(props) => props["data-type-position-top"]};
  left: ${(props) => props["data-type-position-left"]};
  @media screen and (max-width: 760px) {
    height: 200px;
    width: 200px;
  }
`;
const Stats = (props) => {
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
  const DATA = [
    {
      stat: "76%",
      text: `of people who search for 
something nearby on their smartphone 
visit a related business within a day.`,
      source: "Source: Think with Google",
      color: state.colors.accent,
    },
    {
      stat: "67.6%",
      text: `of smartphone users will use
maps and navigation apps
by 2021
`,
      source: "Source:  eMarketer 2019",
      color: state.colors.main,
    },
    {
      stat: "58%",
      text: `of consumers used voice search
for local business information
last year.
`,
      source: "Source:  Score",
      color: state.colors.secondary,
    },
  ];
  return (
    <Section>
      <Inner>
        <Heading color={state.colors.main}>
          It Is Essential To Add Your Business To Maps And Voice Search
        </Heading>
        <Container>
          {DATA.map((item) => {
            const key = Math.floor(parseFloat(item.stat));
            return (
              <Card key={key}>
                <CardInner>
                  <CardStat color={item.color}>{item.stat}</CardStat>
                  <CardText color={state.colors.dark}>{item.text}</CardText>
                  <CardSource color={item.color}>{item.source}</CardSource>
                </CardInner>
              </Card>
            );
          })}
        </Container>
        <StartBtn
          color={state.colors.accent}
          onClick={() => scrollToForm(state.formSection)}
        >
          Get Started
        </StartBtn>
        <DecorationImg
          src="https://ik.imagekit.io/usam13ogl7u/undraw_Map_dark_re_36sy_eHtWDIRlR3.png?updatedAt=1637609136100"
          alt="navigation"
          data-type-position-top="10%"
          data-type-position-left="0"
        />
        <DecorationImg
          src="https://ik.imagekit.io/usam13ogl7u/undraw_Navigation_re_wxx4_mVCgjjJTy.png?updatedAt=1637609159919"
          alt="navigation"
          data-type-position-top="74%"
          data-type-position-left="70%"
        />
      </Inner>
    </Section>
  );
};

Stats.propTypes = {};

export default Stats;
