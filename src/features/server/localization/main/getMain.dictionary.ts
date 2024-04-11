import { LanguageEnum } from "@entities/constants";

const dictionaryConfig = {
  be: () => import(`./locales/be.json`).then((module) => module.default),
  en: () => import(`./locales/en.json`).then((module) => module.default),
  ru: () => import(`./locales/ru.json`).then((module) => module.default),
};

export const getMainDictionary = async (lang: LanguageEnum) => {
  if (typeof lang === 'string' && Object.keys(dictionaryConfig).includes(lang)) {
    const dictionary = dictionaryConfig[lang];
    return dictionary();
  }
}
