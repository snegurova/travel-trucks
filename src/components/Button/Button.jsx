import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

const Button = ({ children, component, className, type }) => {
  const Component = component || 'button';
  return (
    <Component type={type} className={clsx(styles.button, className)}>
      {children}
    </Component>
  );
};

export default Button;
