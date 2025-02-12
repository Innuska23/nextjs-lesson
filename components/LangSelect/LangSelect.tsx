"use client";

import { useParams, useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { i18nConfig } from "../../config/i18n";

const LangSelect = () => {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || i18nConfig.defaultLocale;

  const changeLangHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.currentTarget.value;

    router.push(`/${newLocale}`);
  };

  return (
    <div>
      <select onChange={changeLangHandler} defaultValue={locale}>
        <option value="ru">ru</option>
        <option value="en">en</option>
      </select>
    </div>
  );
};

export default LangSelect;
