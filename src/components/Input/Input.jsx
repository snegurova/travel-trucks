import styles from './Input.module.css';
import { Field } from 'formik';
import MapIcon from '../../icons/Map';
import clsx from 'clsx';

const Input = (props) => {
  const { placeHolder, withIcon, name, id, type = 'text', ...attr } = props;
  return (
    <Field name={name}>
      {({ field }) => (
        <div className={styles.wrapper}>
          {withIcon && (
            <MapIcon
              color={field.value === '' ? 'var(--gray)' : 'var(--main-color)'}
              className={styles.icon}
            />
          )}
          <input
            id={id}
            type={type}
            className={clsx(styles.input, {
              [styles.withIcon]: withIcon,
            })}
            {...field}
            {...attr}
            placeholder={placeHolder}
          />
        </div>
      )}
    </Field>
  );
};

export default Input;
