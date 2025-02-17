import { useParams } from 'next/navigation';
import { i18nConfig } from '../config/i18n';
import { translations } from '../translations';
import { Locale } from 'next/dist/compiled/@vercel/og/satori';


export const useTranslations = () => {
    const params = useParams();
    const locale = (params?.locale as Locale) || i18nConfig.defaultLocale;
    return {
        t: translations[locale],
        locale
    };
};