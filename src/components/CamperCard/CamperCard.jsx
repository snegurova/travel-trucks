import styles from './CamperCard.module.css';
import Typography from '../Typography/Typography';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useFormatPrice } from '../../hooks/hooks';
import Featured from '../Featured/Featured';

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
          <div className="headerRight">
            <Typography variant="h2" component="span" color="main">
              {formattedPrice}
            </Typography>
            <Featured id={id} />
          </div>
        </div>
        <div>{rating}</div>
        <div>{reviews.length} Reviews</div>
        <div>{location}</div>
        <div>{description}</div>
        <div>
          Tags: {transmission} {engine} {AC && 'AC'} {bathroom && 'bathroom'}{' '}
          {kitchen && 'kitchen'} {TV && 'TV'} {radio && 'radio'}{' '}
          {refrigerator && 'refrigerator'} {microwave && 'microwave'}{' '}
          {gas && 'gas'} {water && 'water'}
        </div>
        <Link to={`/catalog/${id}`}>
          <Button component="span">Show more</Button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
