import Header from "./components/Header";
import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Nav from "./components/Navigation";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Logo src={logo} />
        <Nav>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Nav>
        <Avatar src={avatar} />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
