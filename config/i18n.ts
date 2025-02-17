export const i18nConfig = {
    defaultLocale: 'en',
    locales: ['en', 'ru'] as const
} as const;

export type Locale = typeof i18nConfig.locales[number];