"use client";

import { useState } from "react";
import { getRegistrationDictionary } from "features/server/localization/registration";
import { DEFAULT_LANGUAGE, LanguageEnum } from "@entities/constants";
import { Button, TextField } from "@entities/ui";

type Props = Readonly<{
  params: { lang: LanguageEnum };
}>;

export const Registration = async ({
  params: { lang = DEFAULT_LANGUAGE },
}: Props) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { token: string }) => {
        window.localStorage.setItem("token", data.token);
      })
      .catch((error) => console.error("Error:", error));
  };

  const dict = await getRegistrationDictionary(lang);
  return (
    <div>
      <TextField
        type="string"
        value={login}
        onChange={(ev) => {
          setLogin(ev.target.value);
        }}
      />
      <TextField
        type="string"
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
      />
      <Button onClick={onSubmit}>{dict.button}</Button>
    </div>
  );
};
