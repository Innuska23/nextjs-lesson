export const translations = {
    en: {
        title: "Welcome to Rick and Morty Explorer",
        description: "Explore the Rick and Morty universe",
        navigation: {
            characters: "Characters",
            locations: "Locations",
            episodes: "Episodes",
            home: "Home"
        },
        routes: {
            characters: "characters",
            locations: "locations",
            episodes: "episodes",
        },
        common: {
            loading: "Loading...",
            notFound: "Not found",
            backToCharacters: "BACK TO CHARACTERS"
        },
        pages: {
            characters: {
                title: "Characters"
            },
            character: {
                id: "ID",
                status: "Status",
                species: "Species",
                gender: "Gender",
                origin: "Origin",
                location: "Location"
            },
            episodes: {
                title: "Episodes",
                episode: "Episode",
                airDate: "Air Date"
            },
            locations: {
                title: "Locations",
                type: "Type",
                dimension: "Dimension"
            }
        }
    },
    ru: {
        title: "Добро пожаловать в Рик и Морти",
        description: "Исследуйте вселенную Рика и Морти",
        navigation: {
            characters: "Персонажи",
            locations: "Локации",
            episodes: "Эпизоды",
            home: "Главная"
        },
        routes: {
            characters: "characters",
            locations: "locations",
            episodes: "episodes",
        },
        common: {
            loading: "Загрузка...",
            notFound: "Не найдено",
            backToCharacters: "НАЗАД К ПЕРСОНАЖАМ"
        },
        pages: {
            characters: {
                title: "Персонажи"
            },
            character: {
                id: "ИД",
                status: "Статус",
                species: "Вид",
                gender: "Пол",
                origin: "Происхождение",
                location: "Локация"
            },
            episodes: {
                title: "Эпизоды",
                episode: "Эпизод",
                airDate: "Дата выхода"
            },
            locations: {
                title: "Локации",
                type: "Тип",
                dimension: "Измерение"
            }
        }
    }
} as const;

export type Locale = keyof typeof translations;