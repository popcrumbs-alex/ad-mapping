import React from "react";
import styled from "styled-components";
import { logo } from "../../../reusable/logo";

const FooterSection = styled.footer`
  width: 100%;
  background: #fafafa;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Inner = styled.div`
  width: 75%;
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  object-fit: contain;
  max-width: 300px;
`;
const Footer = () => {
  return (
    <FooterSection>
      <Inner>
        <Column>
          <Logo src={logo} alt="logo" />
        </Column>
      </Inner>
    </FooterSection>
  );
};

export default Footer;
