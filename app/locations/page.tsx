"use client";

import { useQuery } from "@tanstack/react-query";
import {
  LocationType,
  ResponseType,
} from "../../assets/api/rick-and-morty-api";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Card } from "../../components/Card/Card";

const getLocations = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/location", {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch locations");
  }
  return res.json();
};

function Locations() {
  const { data: locations } = useQuery<ResponseType<LocationType>>({
    queryKey: ["locations"],
    queryFn: getLocations,
  });

  if (!locations) return null;

  return (
    <PageWrapper>
      {locations.results.map((location) => (
        <Card key={location.id} name={location.name} />
      ))}
    </PageWrapper>
  );
}

export default Locations;
