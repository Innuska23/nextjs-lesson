"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { useTranslations } from "../../hooks/useTranslations";
import { i18nConfig } from "../../config/i18n";

export default function LangSelect() {
  const router = useRouter();
  const { locale } = useTranslations();

  const changeLangHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.currentTarget.value;
    if (newLocale !== locale) {
      router.replace(`/${newLocale}`);
    }
  };

  return (
    <select onChange={changeLangHandler} value={locale}>
      {i18nConfig.locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
