import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../App";
import { darken, lighten } from "polished";
import ReCAPTCHA from "react-google-recaptcha-enterprise";
import { useMutation } from "@apollo/client";
import { SEND_EMAIL } from "../../../mutations/SendEmail";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
  overflow-y: visible;
  position: relative;
  &::before {
    content: "";
    background: ${(props) => props.color};
    position: absolute;
    top: 0;
    left: 0;
    height: 80vh;
    width: 100%;
    display: block;
    z-index: 0;
  }
  @media screen and (max-width: 760px) {
    background: ${(props) => props.color};
    &::before {
      display: none;
    }
  }
`;

const Inner = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  & h2 {
    line-height: 1.5;
    font-family: Roboto, sans-serif;
    max-width: 500px;
    font-weight: 800;
    font-size: 3.7rem;
    color: #fff;
  }
  @media screen and (max-width: 760px) {
    & h2 {
      font-size: 2rem;
    }
  }
`;

const Decoration = styled.div`
  background-color: #03cea4;
  height: 10px;
  width: 361px;
  display: block;
  margin: 1rem 0;
  border-radius: 10px;
  border: 0;
  @media screen and (max-width: 760px) {
    height: 5px;
    width: 90%;
  }
`;
const FormContainer = styled.div`
  // background: #ffd07b;
  background: #eef;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media screen and (max-width: 760px) {
    margin-top: 2rem;
  }
`;
const FormInner = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;
const FormContainerHeading = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  & p {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
    color: ${(props) => props.color};
    // color: #fff;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.3rem 0;
  position: relative;
  padding: 0.5rem;
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
  font-size: 0.7rem;
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
  margin-bottom: 2rem;
  &:hover {
    cursor: pointer;
    background: ${(props) => darken(0.1, props.color)};
  }
`;

const CaptchaContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  width: 100%;
`;

const Alert = styled.div`
  border-radius: 5px;
  background-color: ${(props) => lighten(0.2, props.color)};
  border: 2px solid ${(props) => props.color};
  color: #fff;
  width: 100%;
  display: flex;
  padding: 0rem 1rem;
  margin: 0.5rem 0;
  & p {
    color: #fff;
  }
`;

const FormSection = () => {
  const context = useContext(ThemeContext);
  const formRef = useRef(null);
  const { state, dispatch } = context;

  useEffect(() => {
    if (formRef) {
      dispatch({ type: "ADD_FORM_REF", payload: formRef });
    }
  }, [formRef, dispatch]);

  return (
    <Section color={state.colors.main}>
      <Inner ref={formRef}>
        <Column>
          <h2>Luckily for you, map listings are now open to all businesses.</h2>
          <Decoration />
        </Column>
        <Column>
          <FormComponent context={state} />
        </Column>
      </Inner>
    </Section>
  );
};

const FormComponent = ({ context }) => {
  const token = "6Lc7IVMdAAAAAL0mijXMMD9lb398-0qb-Nmck8Bj";
  const [formData, setData] = useState({
    businessName: "",
    name: "",
    cellPhone: "",
    zip: "",
    businessPhone: "",
    businessAddress: "",
    businessCity: "",
    businessState: "",
    businessEmail: "",
  });

  //captcha stuff
  const [capVis, setVis] = useState(false);
  const [captcha, setCaptcha] = useState(null);
  const captchaChange = (val) => setCaptcha(() => val);

  //form
  const changeEvent = (event) =>
    setData({ ...formData, [event.target.name]: event.target.value });
  const [loading, setLoading] = useState(false);

  const {
    businessName,
    name,
    cellPhone,
    zip,
    businessAddress,
    businessPhone,
    businessEmail,
    businessCity,
    businessState,
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
      value: businessState,
      name: "businessState",
    },
    {
      label: "Business Email",
      value: businessEmail,
      name: "businessEmail",
    },
  ];

  const [sendEmail, { error, loading: mutationLoading, data }] =
    useMutation(SEND_EMAIL);

  const openCaptcha = (e) => {
    e.preventDefault();
    setVis(true);
  };

  const handleSubmit = useCallback(async () => {
    setLoading(true);
    setVis(false);
    try {
      setLoading(false);

      await sendEmail({ variables: { input: { ...formData } } });
    } catch (error) {
      console.error("error in mutation", error);
      setLoading(false);
      return error;
    }
  }, [formData, sendEmail]);

  useEffect(() => {
    if (captcha !== null) {
      handleSubmit();
    }
  }, [captcha, handleSubmit]);

  useEffect(() => {
    if (data && !error) {
      setLoading(false);
    }
  }, [data, error]);
  console.log("is this an error", error);

  return (
    <FormContainer>
      <FormInner>
        <FormContainerHeading color={context.colors.dark}>
          <p>
            The wait is almost over, if you want your business included in this
            service please complete your business information below
          </p>
        </FormContainerHeading>
        <Form>
          {DATA.map((inputData, index) => {
            return (
              <InputContainer key={index * 36}>
                <Label>{inputData.label}</Label>
                <Input
                  value={inputData.value}
                  placeholder={inputData.label}
                  name={inputData.name}
                  color={context.colors.main}
                  onChange={changeEvent}
                />
              </InputContainer>
            );
          })}
          {data && (
            <Alert color={context.colors.accent}>
              <p>Request Has Been Sent!</p>
            </Alert>
          )}
          {error && (
            <Alert color={context.colors.danger}>
              <p>{error.message}</p>
            </Alert>
          )}
          {!loading && !mutationLoading ? (
            capVis ? (
              <CaptchaContainer>
                <ReCAPTCHA sitekey={token} onChange={captchaChange} />
              </CaptchaContainer>
            ) : (
              <FormButton color={context.colors.main} onClick={openCaptcha}>
                Pre-Register Me For Ad Mapping Map Listings
              </FormButton>
            )
          ) : (
            <p>Submitting form, please wait...</p>
          )}
        </Form>
      </FormInner>
    </FormContainer>
  );
};

export default FormSection;
