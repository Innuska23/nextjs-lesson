"use client";

import {
  CharacterType,
  ResponseType,
} from "../../assets/api/rick-and-morty-api";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import CharacterCard from "../../components/Card/CharacterCard/CharacterCard";

const getCharacters = async (): Promise<ResponseType<CharacterType>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`, {
    cache: "force-cache",
  });

  return await res.json();
};

const Characters = async () => {
  const { results } = await getCharacters();

  return (
    <PageWrapper>
      {results?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </PageWrapper>
  );
};

export default Characters;
