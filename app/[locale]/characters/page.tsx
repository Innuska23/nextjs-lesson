"use client";

import { CharacterType, ResponseType } from "../../../assets/api/rick-and-morty-api";
import CharacterCard from "../../../components/Card/CharacterCard/CharacterCard";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import { useTranslations } from "../../../hooks/useTranslations";



const getCharacters = async (): Promise<ResponseType<CharacterType>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`, {
    cache: "force-cache",
  });
  return await res.json();
};

const Characters = async () => {
  const { results } = await getCharacters();
  const { t } = useTranslations();

  return (
    <PageWrapper>
      <h1>{t.pages.characters.title}</h1>
      {results?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </PageWrapper>
  );
};

export default Characters;
