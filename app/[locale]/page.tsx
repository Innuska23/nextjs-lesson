"use client";

import Image from "next/image";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { useTranslations } from "../../hooks/useTranslations";

const Home = () => {
  const { t } = useTranslations();

  return (
    <PageWrapper>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <h1>{t.title}</h1>
    </PageWrapper>
  );
};

export default Home;
