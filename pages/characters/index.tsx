import dynamic from "next/dynamic";
import { API } from "../../assets/api/api";
import {
  CharacterType,
  ResponseType,
} from "../../assets/api/rick-and-morty-api";
import { getLayout } from "../../components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

const CharacterCard = dynamic(
  () =>
    import("../../components/Card/CharacterCard/CharacterCard").then(
      (module) => module.CharacterCard
    ),
  { ssr: false, loading: () => <h1>Loading...</h1> }
);

export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters();

  return {
    props: {
      characters,
    },
    // revalidate: 30,
  };
};

type PropsType = {
  characters: ResponseType<CharacterType>;
};

const Characters = (props: PropsType) => {
  const { characters } = props;
  return (
    <PageWrapper>
      {characters.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </PageWrapper>
  );
};

Characters.getLayout = getLayout;
export default Characters;
