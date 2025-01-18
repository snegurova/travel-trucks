import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Typography from '../Typography/Typography';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(styles.link, { [styles.active]: isActive });
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={buildLinkClass}>
        <Typography variant="body2" component="span" color="unset">
          Home
        </Typography>
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        <Typography variant="body2" component="span" color="unset">
          Catalog
        </Typography>
      </NavLink>
    </nav>
  );
};

export default Navigation;
