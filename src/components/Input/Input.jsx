import styles from './Input.module.css';
import { Field } from 'formik';

const Input = (props) => {
  const { placeHolder, withIcon, name } = props;
  return (
    <Field
      type="text"
      name={name}
      className={styles.Input}
      placeholder={placeHolder}
    />
  );
};

export default Input;
