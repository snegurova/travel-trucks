import styles from './Button.module.css';
import clsx from 'clsx';

const Button = ({
  children,
  component,
  className,
  type,
  onClick,
  isSecondary,
}) => {
  const Component = component || 'button';
  return (
    <Component
      type={type}
      className={clsx(styles.button, className, {
        [styles.secondary]: isSecondary,
      })}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Button;
