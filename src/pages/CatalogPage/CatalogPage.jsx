import { useEffect } from 'react';
import styles from './CatalogPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems, fetchCampers } from '../../redux/campersSlice';
import Container from '../../components/Container/Container';
import CampersList from '../../components/CampersList/CampersList';
import { selectFilters } from '../../redux/filtersSlice';
import FiltersForm from '../../components/FiltersForm/FiltersForm';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCampers(filters));
    return () => clearItems();
  }, [dispatch, filters]);
  return (
    <Container>
      <div className={styles.layoutWrapper}>
        <FiltersForm />
        <CampersList />
      </div>
    </Container>
  );
};

export default CatalogPage;
