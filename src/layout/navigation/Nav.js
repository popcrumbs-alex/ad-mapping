import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../App";
import { logo } from "../../reusable/logo";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  box-shadow: 0 1px 20px #eee;
`;
const Inner = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 760px) {
    width: 90%;
    align-items: center;
  }
`;
const Logo = styled.img`
  object-fit: contain;
  max-width: 200px;
  @media screen and (max-width: 760px) {
    max-width: 150px;
  }
`;
const NavButton = styled.button`
  padding: 0.3rem 0.7rem;
  min-width: 150px;
  background: transparent;
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 160px;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.color};
    color: #fff;
  }
  @media screen and (max-width: 760px) {
    min-width: 120px;
    max-width: 120px;
    padding: 0.5rem;
  }
`;

const Nav = () => {
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
  return (
    <NavContainer>
      <Inner>
        <Logo src={logo} alt="logo" />
        <NavButton
          color={state.colors.main}
          onClick={() => scrollToForm(state.formSection)}
        >
          Get Started
        </NavButton>
      </Inner>
    </NavContainer>
  );
};

Nav.propTypes = {};

export default Nav;
