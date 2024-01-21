'use client'
import styles from "./page.module.scss";

export default function Home() {
  const tmp = () => {
    const user = {
      name: 'John',
      email: 'Johnsmith@mail.ru',
      password: '12345678910',
    }
    fetch('http://localhost:5000/api/auth/signup/',
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(user)
      }).then((value) => {
        console.log(value)
      }).catch((error) => {
        console.log(error)
      })
  }
  return <div className={styles.main}>
    <button onClick={tmp}>
      Button
    </button>
  </div>;
}
