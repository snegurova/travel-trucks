import StarIcon from '../../icons/Star';
import Typography from '../Typography/Typography';
import styles from './Reviews.module.css';

const Reviews = (props) => {
  const { reviews } = props;
  return (
    <ul>
      {reviews.map(
        ({ reviewer_name: name, reviewer_rating: rating, comment }) => (
          <li key={`${name}-${rating}`} className={styles.rating}>
            <div className={styles.header}>
              <div className={styles.avatar}>{name[0]}</div>
              <div className={styles.info}>
                <Typography variant="body2" color="main">
                  {name}
                </Typography>
                <div className={styles.rating}>
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <StarIcon
                        key={index}
                        color={
                          index + 1 < rating
                            ? 'var(--rating-color)'
                            : 'var(--badges-color)'
                        }
                      />
                    ))}
                </div>
              </div>
            </div>
            <Typography variant="body1" color="text">
              {comment}
            </Typography>
          </li>
        )
      )}
    </ul>
  );
};

export default Reviews;
