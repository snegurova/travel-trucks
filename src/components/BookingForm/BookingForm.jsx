import styles from './BookingForm.module.css';
import toast from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Typography from '../Typography/Typography';
import Input from '../Input/Input';
import Button from '../Button/Button';

const BookingForm = () => {
  const initialValues = { name: '', email: '', date: '', comment: '' };
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required('Name is required'),
    email: Yup.string().required('Email is required'),
    date: Yup.date().required('Date is required'),
    comment: Yup.string(),
  });
  const onSubmit = (data, { resetForm }) => {
    toast.success(
      `Your request has been sent successfully! We will contact you shortly.`
    );

    resetForm();
  };
  return (
    <div className={styles.wrapper}>
      <Typography variant="h2" color="main">
        Book your campervan now
      </Typography>
      <Typography variant="body1" color="gray">
        Stay connected! We are always ready to help you.
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.bookingForm}>
          <div className={styles.inputs}>
            <Input name="name" placeHolder="Name*" />
            <ErrorMessage name="name" component="p" className={styles.error} />
            <Input name="email" type="email" placeHolder="Email*" />
            <ErrorMessage name="email" component="p" className={styles.error} />
            <Input
              name="date"
              type="text"
              placeHolder="Booking date*"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => (e.target.type = 'text')}
              min={new Date().toISOString().split('T')[0]}
            />
            <ErrorMessage name="date" component="p" className={styles.error} />

            <Field
              name="comment"
              as="textarea"
              placeholder="Comment"
              className={styles.input}
              rows="3"
            />
          </div>
          <Button type="submit" className={styles.sendButton}>
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
