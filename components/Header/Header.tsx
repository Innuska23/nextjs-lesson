"use client";

import styled from "styled-components";
import  LinkBlock from "./LinkBlock/LinkBlock";

function Header() {
  return (
    <Navbar>
      <LinkBlock title={"Characters"} />
      <LinkBlock title={"Locations"} />
      <LinkBlock title={"Episodes"} />
      <LinkBlock title={"Test"} />
      <LinkBlock title={"Private"} />
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Header;
