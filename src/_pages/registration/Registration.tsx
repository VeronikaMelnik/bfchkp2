"use server";

import { RegistrationInfo } from "widgets/layouts/global/RegistrationInfo";
import { getRegistrationDictionary } from "features/server/localization/registration";
import { DEFAULT_LANGUAGE, LanguageEnum } from "@entities/constants";

type Props = Readonly<{
  params: { lang: LanguageEnum };
}>;

export const Registration = async ({
  params: { lang = DEFAULT_LANGUAGE },
}: Props) => {
  const dict = await getRegistrationDictionary(lang);
  return <RegistrationInfo dict={dict} />;
};
