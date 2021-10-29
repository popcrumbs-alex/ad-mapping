import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeContext } from "../../../App";

const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 8rem 0;
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 85%;
  gap: 2rem;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  & img {
    object-fit: contain;
    max-width: 450px;
  }
  & p {
    line-height: 2;
    font-family: Roboto, sans-serif;
    max-width: 500px;
    font-weight: 600;
    font-size: 1.3rem;
    color: ${(props) => props.color};
  }
`;

const MapSection = () => {
  const context = useContext(ThemeContext);
  return (
    <Section>
      <Inner>
        <Column>
          <img src="https://ik.imagekit.io/usam13ogl7u/map-with-purp_V6C35w2wP8.png?updatedAt=1635529286340" />
        </Column>
        <Column color={context.colors.dark}>
          <p>
            Ever notice those little notations showing a McDonalds nearby, or
            that gas station up the road?
          </p>
          <p>
            Imagine how much business they must get when people realize they are
            one block over or, just around the corner. McDonalds is so lucky,
            don’t you wish you were as lucky and got put on a map like google or
            Waze like that?
          </p>
        </Column>
      </Inner>
    </Section>
  );
};

MapSection.propTypes = {};

export default MapSection;
