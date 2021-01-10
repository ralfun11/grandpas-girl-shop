import styled from "styled-components";
import HeartIcon from './icons/liked.svg'
import SearchIcon from './icons/loopa.svg'
import UserIcon from './icons/user.svg'
import LogoIcon from './icons/logo.svg'
import Link from "next/link";
import { useState } from 'react';


const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  min-height: 50px;
  max-height: 80px;

  display: flex;
  place-items: center;
  justify-content: space-between;

  padding: 3% 3%;
  background-color: white;

  & > a {
    margin: 0 15px 0 0;
  };
`;

const Logo = styled(LogoIcon)`
  height: 8vh;
  min-height: calc(50px - 10%);
  max-height: calc(60px);
  /*min-height: calc(50px - 2vh);*/
`

const ButtonsContainer = styled.div`
  width: 6rem;
  display: flex;
  place-items: center;
  justify-content: space-between;
`

const StyledSvg = styled(HeartIcon)`
  color: black;
`

const TopBar = function () {
  const [state, setState] = useState('normal')

  typeof window !== 'undefined' && window.addEventListener('scroll', () => {
    setState(window.scrollY > 10 ? 'small' : 'normal')
  })

  console.log(state)
  return (
    <Container>
      <Logo />
      <ButtonsContainer>
        <Link href="/">
        <a>
          <HeartIcon />
        </a>
      </Link>
      <Link href="/about">
        <a>
          <SearchIcon />
        </a>
      </Link>
      <Link href="/blog">
        <a>
          <UserIcon />
        </a>
      </Link>
      </ButtonsContainer>
    </Container>
  )
};

export default TopBar;
