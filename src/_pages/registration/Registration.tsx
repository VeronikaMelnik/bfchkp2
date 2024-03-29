"use server";

import { RegistrationInfo } from "widgets/layouts/global/RegistrationInfo";
import { getAuthDictionary } from "features/server/localization/auth";
import { DEFAULT_LANGUAGE, LanguageEnum } from "@entities/constants";

type Props = Readonly<{
  params: { lang: LanguageEnum };
}>;

export const Registration = async ({
  params: { lang = DEFAULT_LANGUAGE },
}: Props) => {
  const dict = await getAuthDictionary(lang);
  return <RegistrationInfo dict={dict} />;
};
