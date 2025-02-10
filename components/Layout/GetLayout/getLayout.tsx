import { ReactElement } from "react";
import BaseLayout from "../BaseLayout/BaseLayout";

const getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default getLayout;
