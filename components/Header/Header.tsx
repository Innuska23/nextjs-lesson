"use client";

import styled from "styled-components";
import LinkBlock from "./LinkBlock/LinkBlock";

function Header() {
  return (
    <Navbar>
      <LinkBlock title={"Characters"} />
      <LinkBlock title={"Locations"} />
      <LinkBlock title={"Episodes"} />
      {/* <LinkBlock title={"Test"} />
      <LinkBlock title={"Private"} /> */}
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export default Header;
