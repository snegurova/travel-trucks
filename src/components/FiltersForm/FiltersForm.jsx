import { useDispatch, useSelector } from 'react-redux';
import {
  setAC,
  setLocation,
  setTransmission,
  setKitchen,
  setTV,
  setBathroom,
  setForm,
  setPage,
  selectFilters,
} from '../../redux/filtersSlice';
import { Formik, Form, Field } from 'formik';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './FiltersForm.module.css';
import { useId } from 'react';
import Typography from '../Typography/Typography';
import clsx from 'clsx';
import ACIcon from '../../icons/AC';
import TransmissionIcon from '../../icons/Transmission';
import KitchenIcon from '../../icons/Kitchen';
import TVIcon from '../../icons/TV';
import BathroomIcon from '../../icons/Bathroom';
import VanIcon from '../../icons/Van';
import FullyIcon from '../../icons/Fully';
import AlcoveIcon from '../../icons/Alcove';

const FiltersForm = () => {
  const filters = useSelector(selectFilters);
  const initialValues = {
    location: filters.location || '',
    AC: filters.AC || false,
    transmission: filters.transmission || false,
    kitchen: filters.kitchen || false,
    TV: filters.TV || false,
    bathroom: filters.bathroom || false,
    form: filters.form,
  };
  const dispatch = useDispatch();
  const handleSearch = ({
    location,
    AC,
    transmission,
    kitchen,
    TV,
    bathroom,
    form,
  }) => {
    dispatch(setPage(1));
    dispatch(setLocation(location));
    dispatch(setAC(AC));
    dispatch(setTransmission(transmission));
    dispatch(setKitchen(kitchen));
    dispatch(setTV(TV));
    dispatch(setBathroom(bathroom));
    dispatch(setForm(form));
  };
  const locationId = useId();
  const equipmentFilters = [
    {
      name: 'AC',
      icon: <ACIcon width="32" height="32" />,
    },
    {
      name: 'transmission',
      label: 'automatic',
      icon: <TransmissionIcon width="32" height="32" />,
    },
    {
      name: 'kitchen',
      icon: <KitchenIcon width="32" height="32" />,
    },
    {
      name: 'TV',
      icon: <TVIcon width="32" height="32" />,
    },
    {
      name: 'bathroom',
      icon: <BathroomIcon width="32" height="32" />,
    },
  ];
  const typeFilters = [
    {
      value: 'panelTruck',
      label: 'Van',
      icon: <VanIcon width="32" height="32" />,
    },
    {
      value: 'fullyIntegrated',
      label: 'Fully Integrated',
      icon: <FullyIcon width="26" height="26" />,
    },
    {
      value: 'alcove',
      label: 'Alcove',
      icon: <AlcoveIcon width="28" height="28" />,
    },
  ];
  return (
    <Formik initialValues={initialValues} onSubmit={handleSearch}>
      <Form className={styles.filtersForm}>
        <label htmlFor={locationId} className={styles.inputLabel}>
          <Typography variant="body2" color="gray">
            Location
          </Typography>
        </label>
        <Input
          placeHolder="Kyiv, Ukraine"
          name="location"
          withIcon
          id={locationId}
        />
        <Typography
          className={styles.filtersTitle}
          variant="body2"
          color="text"
        >
          Filters
        </Typography>
        <fieldset className={styles.fieldset}>
          <Typography variant="h3" component="legend" className={styles.legend}>
            Vehicle Equipment
          </Typography>
          <div className={styles.filtersWrapper}>
            {equipmentFilters.map(({ name, icon, label }) => (
              <Field name={name} key={name}>
                {({ field }) => (
                  <label
                    className={clsx(styles.label, {
                      [styles.checked]: field.value,
                    })}
                  >
                    <span className={styles.icon}>{icon}</span>
                    {label || name}
                    <input type="checkbox" {...field} />
                  </label>
                )}
              </Field>
            ))}
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <Typography variant="h3" component="legend" className={styles.legend}>
            Vehicle Type
          </Typography>
          <div className={styles.filtersWrapper}>
            {typeFilters.map(({ value, label, icon }) => (
              <Field name="form" key={value}>
                {({ field }) => (
                  <label
                    className={clsx(styles.label, {
                      [styles.checked]: field.value === value,
                    })}
                  >
                    <span className={styles.icon}>{icon}</span>
                    {label}
                    <input type="radio" {...field} value={value} />
                  </label>
                )}
              </Field>
            ))}
          </div>
        </fieldset>
        <Button className={styles.searchButton} type="submit">
          Search
        </Button>
      </Form>
    </Formik>
  );
};

export default FiltersForm;
