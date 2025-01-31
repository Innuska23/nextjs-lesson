import { NextPage } from "next";
import { Layout } from "../Layout";
import { PropsWithChildren, ReactElement } from "react";

export const BaseLayout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props;

  return <Layout>{children}</Layout>;
};

export const getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};
