import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeContext } from "../../App";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  box-shadow: 0 1px 20px #eee;
`;
const Inner = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
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
`;

const Nav = () => {
  const context = useContext(ThemeContext);
  console.log("contsxt", context);
  return (
    <NavContainer>
      <Inner>
        <p>Business Ad Mapping</p>
        <NavButton color={context.colors.main}>Get Started</NavButton>
      </Inner>
    </NavContainer>
  );
};

Nav.propTypes = {};

export default Nav;
