import React from 'react';
import Container from '../../components/Container/Container';
import styles from './HomePage.module.css';
import Typography from '../../components/Typography/Typography';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={styles.heroWrapper}>
      <Container isFullHeight>
        <div className={styles.contentWrapper}>
          <Typography variant="h1">Campers of your dreams</Typography>
          <Typography variant="h2" component="p">
            You can find everything you want in our catalog
          </Typography>
          <Link to="/catalog">
            <Button component="span" className={styles.button}>
              View Now
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
