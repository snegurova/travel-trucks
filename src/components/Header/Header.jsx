import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';
import Logo from '../../icons/Logo';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Logo />
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
