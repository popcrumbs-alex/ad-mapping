import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeContext } from "../../../App";
import { useState } from "react/cjs/react.production.min";

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
const FormContainer = styled.div`
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormInner = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const FormContainerHeading = styled.div``;
const Form = styled.form``;
const InputContainer = styled.div``;
const Label = styled.label``;
const Input = styled.input``;

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
        <Column>
          <FormComponent />
        </Column>
      </Inner>
    </Section>
  );
};

FormSection.propTypes = {};

const FormComponent = ({}) => {
  const [formData, setData] = useState({
    businessName: "",
    name: "",
    cellPhone: "",
    zip: "",
    businessPhone: "",
    businessAddress: "",
    businessCity: "",
    state: "",
    businessEmail: "",
  });

  const changeEvent = (event) =>
    setData({ ...formData, [event.target.name]: event.target.value });
  const {
    businessName,
    name,
    cellPhone,
    zip,
    businessAddress,
    businessPhone,
    businessEmail,
    businessCity,
    state,
  } = formData;
  const DATA = [
    {
      label: "Business Name",
      value: businessName,
      name: "businessName",
    },
    {
      label: "Your Name",
      value: name,
      name: "name",
    },
    {
      label: "Cell Phone #",
      value: cellPhone,
      name: "cellPhone",
    },
    {
      label: "Business Zip Code",
      value: zip,
      name: "zip",
    },
    {
      label: "Business Phone #",
      value: businessPhone,
      name: "businessPhone",
    },
    {
      label: "Business Address",
      value: businessAddress,
      name: "businessAddress",
    },
    {
      label: "Business City",
      value: businessCity,
      name: "businessCity",
    },
    {
      label: "Business State",
      value: state,
      name: "state",
    },
    {
      label: "Business Email",
      value: businessEmail,
      name: "businessEmail",
    },
  ];
  return (
    <FormContainer>
      <FormInner>
        <FormContainerHeading>
          <p>
            The wait is almost over, if you want your business included in this
            service please complete your business information below
          </p>
        </FormContainerHeading>
        <Form>
          {DATA.map((inputData, i) => {
            return (
              <InputContainer key={i}>
                <Label>{inputData.label}</Label>
                <Input
                  value={inputData.value}
                  placeholder={inputData.label}
                  name={inputData.name}
                />
              </InputContainer>
            );
          })}
        </Form>
      </FormInner>
    </FormContainer>
  );
};

export default FormSection;
