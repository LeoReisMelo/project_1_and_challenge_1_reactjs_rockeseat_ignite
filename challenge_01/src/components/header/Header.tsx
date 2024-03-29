import styles from './Header.module.css';
import toDoListLogo from '../../assets/Logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoListLogo} alt="Logotipo da to do list" />
        </header>
    );
}