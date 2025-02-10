"use client";

import { notFound } from "next/navigation";
import { EpisodeType, ResponseType } from "../../assets/api/rick-and-morty-api";
import Card from "../../components/Card/Card";
import getLayout from "../../components/Layout/BaseLayout/BaseLayout";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const getEpisodes = async (): Promise<ResponseType<EpisodeType>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/episode`, {
    next: { revalidate: 60 },
  });

  return await res.json();
};

const Episodes = async () => {
  const { results } = await getEpisodes();

  if (!results) {
    notFound();
  }

  return (
    <PageWrapper>
      {results?.map((episode) => (
        <Card key={episode.id} name={episode.name} />
      ))}
    </PageWrapper>
  );
};

Episodes.getLayout = getLayout;
export default Episodes;
