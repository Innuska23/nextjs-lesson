import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import {
  LocationType,
  ResponseType,
} from "../../assets/api/rick-and-morty-api";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Card } from "../../components/Card/Card";
import { getLayout } from "../../components/Layout/BaseLayout/BaseLayout";

const getLocations = () => {
  return fetch("https://rickandmortyapi.com/api/location", {
    method: "GET",
  }).then((res) => res.json());
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(["locations"], getLocations);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Locations = () => {
  const { data: locations } = useQuery<ResponseType<LocationType>>(
    ["locations"],
    getLocations
  );

  if (!locations) return null;

  return (
    <PageWrapper>
      {locations.results.map((location) => (
        <Card key={location.id} name={location.name} />
      ))}
    </PageWrapper>
  );
};

Locations.getLayout = getLayout;
export default Locations;
