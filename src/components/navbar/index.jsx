import React from "react";
import { Container, Title, Logo } from "./styled";
import Languages from "./components/languages";
import Search from "./components/search";
import Pages from "./components/pages";
import Social from "./components/social";

const Navbar = () => {
  return (
    <Container>
      <Logo />
      <Title>Grandpa’s girl</Title>
      <Search />
      <Pages />
      <Languages />
      <Social />
    </Container>
  );
};

export default Navbar;
