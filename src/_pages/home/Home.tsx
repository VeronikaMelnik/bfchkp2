"use server";

import { HomeInfo } from "widgets/layouts/global/Home";
import { getHomeDictionary } from "features/server/localization/home";
import { DEFAULT_LANGUAGE, LanguageEnum } from "@entities/constants";

type Props = Readonly<{
  params: { lang: LanguageEnum };
}>;

export const Home = async ({ params: { lang = DEFAULT_LANGUAGE } }: Props) => {
  const dict = await getHomeDictionary(lang);
  return <HomeInfo dict={dict} />;
};
