import { TailSpin } from 'react-loader-spinner';
import styles from './Loader.module.css';
const Loader = () => {
  return (
    <div className={styles.loading}>
      <TailSpin height={50} width={50} color="var(--main-color)" />
    </div>
  );
};

export default Loader;
