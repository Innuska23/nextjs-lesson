"use client";

import { NextPage } from "next";
import Layout from "../Layout";
import { PropsWithChildren, ReactElement } from "react";

const BaseLayout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props;

  return <Layout>{children}</Layout>;
};

export default BaseLayout;
