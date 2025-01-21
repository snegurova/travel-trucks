import styles from './Header.module.css';
import Logo from '../../icons/Logo';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className={styles.navigation}>
            <Navigation />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
