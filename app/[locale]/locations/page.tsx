"use client";

import { useQuery } from "@tanstack/react-query";
import { LocationType, ResponseType } from "../../../assets/api/rick-and-morty-api";
import { useTranslations } from "../../../hooks/useTranslations";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import Card from "../../../components/Card/Card";

const getLocations = async (): Promise<ResponseType<LocationType>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/location`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch locations");
  }
  return await res.json();
};

function Locations() {
  const { t } = useTranslations();
  const { data: locations } = useQuery<ResponseType<LocationType>>({
    queryKey: ["locations"],
    queryFn: getLocations,
  });

  if (!locations) return <div>{t.common.loading}</div>;

  return (
    <PageWrapper>
      <h1>{t.pages.locations.title}</h1>
      {locations.results.map((location) => (
        <Card key={location.id} name={location.name}>
          <div>
            {t.pages.locations.type}: {location.type}
          </div>
          <div>
            {t.pages.locations.dimension}: {location.dimension}
          </div>
        </Card>
      ))}
    </PageWrapper>
  );
}

export default Locations;
