import styled from "styled-components";
import { ReactComponent as LogoComponent } from "./icons/logo.svg";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 13vh;
  background-color: #deccc0;

  display: grid;
  align-items: center;
  grid-template-areas: "150px 150px 150px 150px 150px 150px";
`;

export const Title = styled.h1`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 53px;
  margin: 0;

  color: #000000;
`;

export const Logo = styled(LogoComponent)`
  height: 80px;
  width: 80px;
`;
