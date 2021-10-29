import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeContext } from "../../../App";

const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${(props) => props.color};
  padding: 8rem 0;
`;

const Inner = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    line-height: 2;
    font-family: Roboto, sans-serif;
    max-width: 500px;
    font-weight: 800;
    font-size: 2.5rem;
    color: #fff;
  }
`;

const FormSection = (props) => {
  const context = useContext(ThemeContext);
  return (
    <Section color={context.colors.main}>
      <Inner>
        <Column>
          <h2>
            Luckily for you,
            <br />
            map listings are <br />
            now open to all
            <br />
            businesses.
          </h2>
        </Column>
      </Inner>
    </Section>
  );
};

FormSection.propTypes = {};

export default FormSection;
