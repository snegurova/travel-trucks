import { Outlet } from 'react-router-dom';
import styles from './CamperDetailsPage.module.css';

const CamperDetailsPage = () => {
  return (
    <div className={styles.Header}>
      CamperDetailsPage
      <Outlet />
    </div>
  );
};

export default CamperDetailsPage;
