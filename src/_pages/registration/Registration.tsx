import { useState } from "react";

export const Registration = () => {
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

  return (
    <div>
      <input
        type="string"
        value={login}
        onChange={(ev) => {
          setLogin(ev.target.value);
        }}
      />
      <input
        type="string"
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
      />
      <button onClick={onSubmit}>Зарегитсрироваться</button>
    </div>
  );
};
