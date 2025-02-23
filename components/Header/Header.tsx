import styled from "styled-components";
import { LinkBlock } from "./LinkBlock/LinkBlock";
import { LangSelect } from "components/LangSelect/LangSelect";

<<<<<<< HEAD
export const Header = () => (
  <Navbar>
    <LinkBlock title={""} />
    <LinkBlock title={"Characters"} />
    <LinkBlock title={"Locations"} />
    <LinkBlock title={"Episodes"} />
    <LinkBlock title={"Test"} />
    <LinkBlock title={"Private"} />
    <LangSelect />
  </Navbar>
);
=======
function Header() {
  const { t } = useTranslations();

  return (
    <Navbar>
      <LinkBlock title={t.navigation.characters} path={t.routes.characters} />
      <LinkBlock title={t.navigation.locations} path={t.routes.locations} />
      <LinkBlock title={t.navigation.episodes} path={t.routes.episodes} />
      <LangSelect />
    </Navbar>
  );
}
>>>>>>> 9841208c7a29a296d109395ffcdeb076d8c5a5e2

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
