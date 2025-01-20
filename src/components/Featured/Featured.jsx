import { useDispatch, useSelector } from 'react-redux';
import styles from './Featured.module.css';
import { selectFavorites, toggleFavorite } from '../../redux/favoritesSlice';
import HeartIcon from '../../icons/Heart';

const Featured = (props) => {
  const { id } = props;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.find((item) => item.id === id);
  const onClick = () => {
    dispatch(toggleFavorite({ id }));
  };
  return (
    <div onClick={onClick} className={styles.featured}>
      <HeartIcon
        color={isFavorite ? 'var(--button-color)' : 'var(--main-color)'}
      />
    </div>
  );
};

export default Featured;
