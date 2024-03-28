"use server";

import { getPagesDictionary } from "features/server/localization/pages";
import { CompetitionsInfo } from "widgets/layouts/global/CompetitionsInfo";
import { DEFAULT_LANGUAGE, LanguageEnum } from "@entities/constants";

type Props = Readonly<{
  params: { lang: LanguageEnum };
}>;

export const Competitions = async ({
  params: { lang = DEFAULT_LANGUAGE },
}: Props) => {
  const dict = await getPagesDictionary(lang);
  return <CompetitionsInfo dict={dict} />;
};
