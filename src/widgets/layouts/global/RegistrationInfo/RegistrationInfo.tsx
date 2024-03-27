"use client";

import { useState } from "react";
import { Button, TextField } from "@entities/ui";
import styles from "./RegistrationInfo.module.scss";

type Props = Readonly<{
  dict: any;
}>;

export const RegistrationInfo = ({ dict }: Props) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname, login, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { token: string }) => {
        window.localStorage.setItem("token", data.token);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className={styles.wrapper}>
      <h1>{dict.registration}</h1>
      <div className={styles.field}>
        <label>{dict.name}</label>
        <TextField
          type="string"
          value={name}
          onChange={(ev) => {
            setName(ev.target.value);
          }}
        />
      </div>
      <div className={styles.field}>
        <label>{dict.surname}</label>
        <TextField
          type="string"
          value={surname}
          onChange={(ev) => {
            setSurname(ev.target.value);
          }}
        />
      </div>
      <div className={styles.field}>
        <label>{dict.login}</label>
        <TextField
          type="string"
          value={login}
          onChange={(ev) => {
            setLogin(ev.target.value);
          }}
        />
      </div>
      <div className={styles.field}>
        <label>{dict.password}</label>
        <TextField
          type="string"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
      </div>
      <Button onClick={onSubmit}>{dict.button}</Button>
    </div>
  );
};
