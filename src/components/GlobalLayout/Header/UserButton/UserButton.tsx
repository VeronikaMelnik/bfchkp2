import Link from 'next/link';
import styles from './UserButton.module.scss';

export const UserButton = () => {
    return (
        <div className={styles.wrapper}>
            <Link className={styles.link} href={'/login'}>
                Войти
            </Link>
        </div>
    );
};
