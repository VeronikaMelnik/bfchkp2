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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    fetch(`${process.env.API_URL}/auth/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname, email, password }),
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
        <label>{dict.email}</label>
        <TextField
          type="string"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
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
      <Button onClick={onSubmit}>{dict.buttonRegister}</Button>
    </div>
  );
};
