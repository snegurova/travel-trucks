import { useDispatch, useSelector } from 'react-redux';
import styles from './Featured.module.css';
import { selectFavorites, toggleFavorite } from '../../redux/favoritesSlice';

const Featured = (props) => {
  const { id } = props;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  console.log(favorites);

  const isFavorite = favorites.find((item) => item.id === id);
  const onClick = () => {
    dispatch(toggleFavorite({ id }));
  };
  return (
    <div onClick={onClick} className={styles.featured}>
      {isFavorite ? 'F' : 'N'}
    </div>
  );
};

export default Featured;
