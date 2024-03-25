'use client'
import styles from "./Registration.module.scss";
import { CustomLoginForm } from "../RegistrationFinish/RegistrationFinish";

export const Registration = () => {
  const handleToken = () => {
    const token = window.localStorage.getItem('token')
    if (token) {
      alert(token)
    }
  }
  return (
    <div className={styles.wrapper}>
      <h2>Регистрация</h2>
      <CustomLoginForm />
      <button onClick={handleToken}>
        GetToken
      </button>
      {/* <form className="row justify-content-center" method="post">
        <h2>Форма регистрации</h2>
        <div className="mb-3 col-12 col-md-4">
          <label htmlFor="formGroupExampleInput" className="form-label">Логин</label>
          <input type="text" className="form-control" placeholder="введите имя и фамилию" />
        </div>
        <div className="mb-3 col-12 col-md-4">
          <label htmlFor="exampleInputDate1" className="form-label">Дата рождения</label>
          <input type="date" className="form-control" aria-describedby="datwHelp" placeholder="введите вашу дату рождения" />
        </div>
        <div className="mb-3 col-12 col-md-4">
          <label htmlFor="exampleInputEmail1" className="form-label">Почта</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="введите вашу почту" />
          <div id="emailHelp" className="form-text">Почта не будет использована для спама</div>
        </div>
        <div className="mb-3 col-12 col-md-4">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input type="password" className="form-control" placeholder="придумайте пароль" />
        </div>
        <div className="mb-3 col-12 col-md-4">
          <label htmlFor="exampleInputPassword2" className="form-label">Повторите пароль</label>
          <input type="password" className="form-control" placeholder="повторно введите пароль" />
        </div>
        <div className="mb-3 col-12 col-md-4">
          <button type="submit" className="btn btn-secondary" name="button-reg">Зарегистрироваться</button>
          <a href="aut.html">Войти</a>
        </div>
      </form> */}
    </div>
  );
};



