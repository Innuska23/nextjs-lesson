"use client";

import Image from "next/image";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { useParams } from "next/navigation";
import { i18nConfig } from "../../config/i18n";
import { translations, Locale } from "../../translations";

const Home = () => {
  const params = useParams();
  const locale = (params?.locale as Locale) || i18nConfig.defaultLocale;
  const t = translations[locale];

  console.log("Current locale:", locale);
  console.log("Available locales:", i18nConfig.locales);
  console.log("Default locale:", i18nConfig.defaultLocale);

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
