import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledList>
          <li>
            <StyledLink href="/">Home</StyledLink>
            {/* <Link href="/">Home</Link> */}
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
            {/* <Link href="/about">About</Link> */}
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
            {/* <Link href="/contact">Contact</Link> */}
          </li>
        </StyledList>
      </StyledNav>
      <Component {...pageProps} />
    </>
  );
}
