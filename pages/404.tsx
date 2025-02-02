import { getLayout } from "../components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";

const NotFound = () => {
  <PageWrapper>404 NOT FOUND</PageWrapper>;
};

NotFound.getLayout = getLayout;
export default NotFound;
