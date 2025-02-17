"use client";

import styled from "styled-components";
import LangSelect from "../LangSelect/LangSelect";
import LinkBlock from "./LinkBlock/LinkBlock";
import { useTranslations } from "../../hooks/useTranslations";

function Header() {
  const { t } = useTranslations();

  return (
    <Navbar>
      <LinkBlock title={t.navigation.characters} />
      <LinkBlock title={t.navigation.locations} />
      <LinkBlock title={t.navigation.episodes} />
      <LangSelect />
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
