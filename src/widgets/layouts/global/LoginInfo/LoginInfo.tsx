import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, TextField } from "@entities/ui";
import styles from "./LoginInfo.module.scss";

type Props = Readonly<{
  dict: any;
}>;

export const LoginInfo = ({ dict }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async () => {
    try {
      const response = await axios.post(`${process.env.API_URL}/auth/login`, {
        email,
        password,
      });

      if (response.status !== 200) {
        throw new Error("Email or password is incorrect");
      }

      const { token } = response.data;
      window.localStorage.setItem("token", token);
      toast.success(dict.loginSuccess);
    } catch (error) {
      console.error("Error:", error);
      toast.error(dict.loginError);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>{dict.login}</h1>
      <div className={styles.field}>
        <label>{dict.email}</label>
        <TextField
          type="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label>{dict.password}</label>
        <TextField
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
      </div>
      <Button onClick={onSubmit}>{dict.buttonLogin}</Button>
    </div>
  );
};
