import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../App";
import { darken } from "polished";
const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${(props) => props.color};
  padding: 4rem 0;
  max-height: 70vh;
  overflow-y: visible;
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
  border-radius: 5px;
`;
const FormInner = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;
const FormContainerHeading = styled.div`
  margin-top: 1rem;
  line-height: 1.6;
  font-weight: 700;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.6rem 0;
  position: relative;
  padding: 0.3rem;
  &:nth-of-type(odd) {
    &::before {
      content: "";
      display: block;
      background: #fff;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
    }
  }
  &:nth-of-type(even) {
    &::before {
      content: "";
      display: block;
      background: #fff;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      clip-path: polygon(3% 0, 97% 0, 100% 100%, 0 100%);
    }
  }
`;
const Label = styled.label`
  position: relative;
  z-index: 1;
  font-weight: 700;
  color: #222;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  width: 80%;
`;
const Input = styled.input`
  position: relative;
  z-index: 1;
  border: 0;
  text-indent: 5px;
  border-bottom: 2px solid #eee;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  font-size: 12px;
  transition: all 0.3s ease-in-out;
  width: 80%;
  &::placeholder {
    font-style: italic;
    color: #ddd;
  }
  &:hover,
  &:active,
  &:focus {
    outline: 0px solid transparent;
    border-color: ${(props) => props.color};
  }
`;

const FormButton = styled.button`
  margin-top: 1rem;
  padding: 1rem;
  color: #fff;
  background: ${(props) => props.color};
  font-weight: 700;
  border: 4px solid ${(props) => darken(0.1, props.color)};
  border-radius: 120px;
  align-self: flex-end;
  transition: all 0.3s ease-in-out;
  max-width: 500px;
  &:hover {
    cursor: pointer;
    background: ${(props) => darken(0.1, props.color)};
  }
`;

const FormSection = (props) => {
  const context = useContext(ThemeContext);
  return (
    <Section color={context.colors.main}>
      <Inner>
        <Column>
          <h2>Luckily for you, map listings are now open to all businesses.</h2>
        </Column>
        <Column>
          <FormComponent context={context} />
        </Column>
      </Inner>
    </Section>
  );
};

FormSection.propTypes = {};

const FormComponent = ({ context }) => {
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
  console.log(context);
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
                  color={context.colors.main}
                />
              </InputContainer>
            );
          })}
          <FormButton color={context.colors.main}>
            Pre-Register Me For Ad Mapping Map Listings
          </FormButton>
        </Form>
      </FormInner>
    </FormContainer>
  );
};

export default FormSection;
