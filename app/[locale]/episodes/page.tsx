"use client";

import { notFound } from "next/navigation";
import { EpisodeType, ResponseType } from "../../../assets/api/rick-and-morty-api";
import { useTranslations } from "../../../hooks/useTranslations";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import Card from "../../../components/Card/Card";


const getEpisodes = async (): Promise<ResponseType<EpisodeType>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/episode`, {
    next: { revalidate: 60 },
  });

  return await res.json();
};

const Episodes = async () => {
  const { results } = await getEpisodes();
  const { t } = useTranslations();

  if (!results) {
    notFound();
  }

  return (
    <PageWrapper>
      <h1>{t.pages.episodes.title}</h1>
      {results?.map((episode) => (
        <Card key={episode.id} name={episode.name}>
          <div>
            {t.pages.episodes.episode}: {episode.episode}
          </div>
          <div>
            {t.pages.episodes.airDate}: {episode.air_date}
          </div>
        </Card>
      ))}
    </PageWrapper>
  );
};

export default Episodes;