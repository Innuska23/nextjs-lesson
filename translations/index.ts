export const translations = {
    en: {
        title: 'Welcome to Next.js',
    },
    ru: {
        title: ' Добро пожаловать к Next.js',
    }
} as const;

export type Locale = keyof typeof translations;