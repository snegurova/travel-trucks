import styles from './CamperDetailsPage.module.css';
import Container from '../../components/Container/Container';
import { useEffect, useState } from 'react';
import { fetchCamper } from '../../api/api';
import { useParams } from 'react-router-dom';
import Typography from '../../components/Typography/Typography';
import Info from '../../components/Info/Info';
import { useFormatPrice } from '../../hooks/hooks';
import clsx from 'clsx';

const CamperDetailsPage = () => {
  const [camper, setCamper] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const formattedPrice = useFormatPrice(camper?.price);
  const [activeTab, setActiveTab] = useState('features');
  useEffect(() => {
    const fetch = async () => {
      try {
        const camper = await fetchCamper(id);
        setCamper(camper);
      } catch {
        setError('There was some problem');
      }
    };
    fetch();
  }, [id]);
  return (
    <Container>
      <div className={styles.wrapper}>
        {error && <div>{error}</div>}
        {camper && (
          <>
            <Typography
              variant="h2"
              component="h1"
              color="main"
              className={styles.heading}
            >
              {camper.name}
            </Typography>
            <Info
              rating={camper.rating}
              reviewsCount={camper.reviews.length}
              location={camper.location}
            />
            <Typography
              variant="h2"
              component="p"
              color="main"
              className={styles.price}
            >
              {formattedPrice}
            </Typography>
            <div className={styles.gallery}>
              {camper.gallery.map(({ thumb }) => (
                <img key={thumb} src={thumb} className={styles.image} />
              ))}
            </div>
            <Typography
              variant="body1"
              color="text"
              className={styles.description}
            >
              {camper.description}
            </Typography>
            <div>
              <div className={styles.tabButtons}>
                <div
                  className={clsx(styles.tab, {
                    [styles.active]: activeTab === 'features',
                  })}
                  onClick={() => setActiveTab('features')}
                >
                  <Typography variant="h3" component="div">
                    Features
                  </Typography>
                </div>
                <div
                  className={clsx(styles.tab, {
                    [styles.active]: activeTab === 'reviews',
                  })}
                  onClick={() => setActiveTab('reviews')}
                >
                  <Typography variant="h3" component="div">
                    Reviews
                  </Typography>
                </div>
              </div>
              <div className={styles.tabContent}>
                {activeTab === 'features' && (
                  <div>
                    <h2>Features</h2>
                    <p>This section contains the features of the product.</p>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div>
                    <h2>Reviews</h2>
                    <p>This section contains user reviews of the product.</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default CamperDetailsPage;
