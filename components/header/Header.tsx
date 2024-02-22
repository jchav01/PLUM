import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/auth/signup/">Sign Up</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/auth/login/">Log In</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
