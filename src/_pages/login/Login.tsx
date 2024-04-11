"use server";

import { getAuthDictionary } from "features/server/localization/auth";
import { DEFAULT_LANGUAGE, LanguageEnum } from "@entities/constants";

type Props = Readonly<{
  params: { lang: LanguageEnum };
}>;

export const Login = async ({ params: { lang = DEFAULT_LANGUAGE } }: Props) => {
  const dict = await getAuthDictionary(lang);
  return dict;
};
