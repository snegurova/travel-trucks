import styles from './CamperDetailsPage.module.css';
import Container from '../../components/Container/Container';
import { useEffect, useState } from 'react';
import { fetchCamper } from '../../api/api';
import { useParams } from 'react-router-dom';
import Typography from '../../components/Typography/Typography';
import Info from '../../components/Info/Info';
import { useFormatPrice } from '../../hooks/hooks';
import Features from '../../components/Features/Features';
import Reviews from '../../components/Reviews/Reviews';
import clsx from 'clsx';
import BookingForm from '../../components/BookingForm/BookingForm';
import Loader from '../../components/Loader/Loader';

const CamperDetailsPage = () => {
  const [camper, setCamper] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const { id } = useParams();
  const formattedPrice = useFormatPrice(camper?.price);
  const [activeTab, setActiveTab] = useState('features');
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const camper = await fetchCamper(id);
        setCamper(camper);
        setIsLoading(false);
      } catch {
        setError('There was some problem');
      }
    };
    fetch();
  }, [id]);
  return (
    <Container>
      <div className={styles.wrapper}>
        {loading && <Loader />}
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
                  <Features
                    transmission={camper.transmission}
                    engine={camper.engine}
                    AC={camper.AC}
                    bathroom={camper.bathroom}
                    kitchen={camper.kitchen}
                    TV={camper.TV}
                    radio={camper.radio}
                    refrigerator={camper.refrigerator}
                    microwave={camper.microwave}
                    gas={camper.gas}
                    water={camper.water}
                    form={camper.form}
                    length={camper.length}
                    width={camper.width}
                    height={camper.height}
                    tank={camper.tank}
                    consumption={camper.consumption}
                  />
                )}
                {activeTab === 'reviews' && (
                  <Reviews reviews={camper.reviews} />
                )}
                <div className={styles.bookingForm}>
                  <BookingForm />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default CamperDetailsPage;
