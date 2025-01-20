import styles from './CampersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectTotal } from '../../redux/campersSlice';
import CamperCard from '../CamperCard/CamperCard';
import Button from '../Button/Button';
import { selectFilters, setPage } from '../../redux/filtersSlice';

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setPage(filters.page + 1));
  };
  const isLoadMore = total > filters.page * filters.limit;

  return (
    <div>
      <div className={styles.campersList}>
        {campers.length > 0 &&
          campers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        {campers.length === 0 && <div>Nothing found by your request</div>}
      </div>
      {isLoadMore && (
        <Button
          isSecondary
          className={styles.loadMore}
          type="button"
          onClick={onClick}
        >
          Load more
        </Button>
      )}
    </div>
  );
};

export default CampersList;
