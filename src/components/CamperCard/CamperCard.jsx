import styles from './CamperCard.module.css';
import Typography from '../Typography/Typography';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useFormatPrice } from '../../hooks/hooks';
import Featured from '../Featured/Featured';
import Info from '../Info/Info';
import Tags from '../Tags/Tags';

const CamperCard = (props) => {
  const {
    camper: {
      id,
      name,
      price,
      rating,
      reviews,
      location,
      description,
      transmission,
      engine,
      AC,
      bathroom,
      kitchen,
      TV,
      radio,
      refrigerator,
      microwave,
      gas,
      water,
      gallery,
    },
  } = props;
  const formattedPrice = useFormatPrice(price);
  return (
    <div className={styles.camperCard}>
      <img className={styles.image} src={gallery[0].thumb} />
      <div className={styles.rightCol}>
        <div className={styles.header}>
          <Typography variant="h2" color="main">
            {name}
          </Typography>
          <div className={styles.headerRight}>
            <Typography variant="h2" component="span" color="main">
              {formattedPrice}
            </Typography>
            <Featured id={id} />
          </div>
        </div>
        <Info
          rating={rating}
          reviewsCount={reviews.length}
          location={location}
        />
        <Typography className={styles.ellipsis} variant="body1" color="text">
          {description}
        </Typography>
        <Tags
          transmission={transmission}
          engine={engine}
          AC={AC}
          bathroom={bathroom}
          kitchen={kitchen}
          TV={TV}
          radio={radio}
          refrigerator={refrigerator}
          microwave={microwave}
          gas={gas}
          water={water}
        />
        <Link to={`/catalog/${id}`}>
          <Button className={styles.showMore} component="span">
            Show more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
