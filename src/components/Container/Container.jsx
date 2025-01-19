import clsx from 'clsx';
import styles from './Container.module.css';

const Container = (props) => {
  const { children, isFullHeight } = props;
  return (
    <div
      className={clsx(styles.container, { [styles.fullHeight]: isFullHeight })}
    >
      {children}
    </div>
  );
};

export default Container;
