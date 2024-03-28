"use client";

import { useState } from "react";
import { Button, TextField } from "@entities/ui";
import styles from "./LofinInfo.module.scss";

type Props = Readonly<{
  dict: any;
}>;

export const LoginInfo = ({ dict }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Email or password is incorrect");
        }
        return response.json();
      })
      .then((data: { token: string }) => {
        window.localStorage.setItem("token", data.token);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className={styles.wrapper}>
      <h1>{dict.login}</h1>
      <div className={styles.field}>
        <label>{dict.email}</label>
        <TextField
          type="email"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
      </div>
      <div className={styles.field}>
        <label>{dict.password}</label>
        <TextField
          type="password"
          value={password}
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
      </div>
      <Button onClick={onSubmit}>{dict.buttonLogin}</Button>
    </div>
  );
};
