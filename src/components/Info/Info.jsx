import MapIcon from '../../icons/Map';
import StarIcon from '../../icons/Star';
import Typography from '../Typography/Typography';
import styles from './Info.module.css';

const Info = (props) => {
  const { rating, reviewsCount, location } = props;
  return (
    <div className={styles.info}>
      <div className={styles.item}>
        <StarIcon />
        <Typography
          variant="body1"
          color="main"
        >{`${rating}(${reviewsCount} Reviews)`}</Typography>
      </div>
      <div className={styles.item}>
        <MapIcon />
        <Typography variant="body1" color="main">
          {location}
        </Typography>
      </div>
    </div>
  );
};

export default Info;
