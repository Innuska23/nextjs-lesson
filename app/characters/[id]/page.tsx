"use client";

import { useEffect, useState } from "react";
import { CharacterType } from "../../../assets/api/rick-and-morty-api";
import CharacterCard from "../../../components/Card/CharacterCard/CharacterCard";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Character = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_RICK_API_URL}/character/${params.id}`
        );
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [params.id]);

  const goToCharacters = () => router.push("/characters");

  if (loading) return <div>Loading...</div>;
  if (!character) return <div>Character not found</div>;

  return (
    <PageWrapper>
      <Container>
        <IdText>ID: {character.id}</IdText>
        <CharacterCard key={character.id} character={character} />
        <Button onClick={goToCharacters}>GO TO CHARACTERS</Button>
      </Container>
    </PageWrapper>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

const Button = styled.button`
  width: 330px;
  height: 60px;
  border-radius: 4px;
  border: none;
  background: #faccff;
  cursor: pointer;

  &:hover {
    background: #fa52d3;
    color: white;
  }
`;

const IdText = styled.div`
  font-size: 40px;
`;

export default Character;
