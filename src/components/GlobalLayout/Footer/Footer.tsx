import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className="footer container-fluid">
        <div className="footer-content container">
          <div className="row footer-section about">
            <div className="col-8">
              <p>
                Белорусская Федерация Чирлидинга и Команд Поддержки — это
                спортивная организация, созданная Язвиным Олегом Владимировичем
                для популяризации чирлидинга в Беларуси и развитии белорусского
                спорта.
                <br />
                <br />
                <span className={styles.phrase}>
                  Приходи к нам — окунись в спортивную жизнь!
                </span>
              </p>
            </div>
            <div className="contact col-4">
              <a href="tel:+375293267922">
                <i className="fas fa-phone"></i> &nbsp; +375(29)326-79-22
              </a>
              <br />
              <a href="mailto:veronikamelnik00@mail.ru">
                <i className="fas fa-envelope"></i> &nbsp; cheerleader@tut.by
              </a>
              <div className="socials">
                <a
                  href="https://www.instagram.com/belarus_cheer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/@cheerleadinginbelarus4366"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://vk.com/bfchkp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-vk"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
