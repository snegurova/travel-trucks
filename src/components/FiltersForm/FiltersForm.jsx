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
      icon: '✔️',
    },
    {
      name: 'transmission',
      icon: '✔️',
    },
    {
      name: 'kitchen',
      icon: '✔️',
    },
    {
      name: 'TV',
      icon: '✔️',
    },
    {
      name: 'bathroom',
      icon: '✔️',
    },
  ];
  const typeFilters = [
    { value: 'panelTruck', label: 'Van', icon: '🚗' },
    { value: 'fullyIntegrated', label: 'Fully Integrated', icon: '🚗' },
    { value: 'alcove', label: 'Alcove', icon: '🚗' },
  ];
  return (
    <Formik initialValues={initialValues} onSubmit={handleSearch}>
      <Form className={styles.filtersForm}>
        <label htmlFor={locationId} className={styles.label}>
          Location
        </label>
        <Input placeHolder="Kyiv, Ukraine" name="location" />
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Vehicle Equipment</legend>
          {equipmentFilters.map(({ name, icon }) => (
            <Field name={name} key={name}>
              {({ field }) => (
                <label
                  className={`${styles.checkboxLabel} ${
                    field.value ? styles.checked : ''
                  }`}
                >
                  <span className={styles.icon}>{icon}</span>
                  {name}
                  <input type="checkbox" {...field} />
                </label>
              )}
            </Field>
          ))}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Vehicle Type</legend>
          {typeFilters.map(({ value, label, icon }) => (
            <Field name="form" key={value}>
              {({ field }) => (
                <label
                  className={`${styles.radioLabel} ${
                    field.value === value ? styles.selected : ''
                  }`}
                >
                  <span className={styles.icon}>{icon}</span>
                  {label}
                  <input type="radio" {...field} value={value} />
                </label>
              )}
            </Field>
          ))}
        </fieldset>
        <Button type="submit">Search</Button>
      </Form>
    </Formik>
  );
};

export default FiltersForm;
