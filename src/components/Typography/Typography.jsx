import React from 'react';
import styles from './Typography.module.css';
import clsx from 'clsx';

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body1: 'p',
  body2: 'p',
};

const Typography = (props) => {
  const { children, component, variant, className, color = 'text' } = props;
  const Component = component || variantMapping[variant];
  return (
    <Component
      className={clsx(
        styles.typography,
        className,
        styles[variant],
        styles[color]
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
