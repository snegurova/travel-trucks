import Tags from '../Tags/Tags';
import Typography from '../Typography/Typography';
import styles from './Features.module.css';

const Features = (props) => {
  const {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = props;
  const details = [
    {
      label: 'Form',
      value:
        form === 'panelTruck'
          ? 'Panel track'
          : form === 'fullyIntegrated'
          ? 'Fully integrated'
          : form,
    },
    {
      label: 'Length',
      value: length,
    },
    {
      label: 'Width',
      value: width,
    },
    {
      label: 'Height',
      value: height,
    },
    {
      label: 'Tank',
      value: tank,
    },
    {
      label: 'Consumption',
      value: consumption,
    },
  ];
  return (
    <div className={styles.features}>
      <Tags
        AC={AC}
        bathroom={bathroom}
        kitchen={kitchen}
        TV={TV}
        radio={radio}
        refrigerator={refrigerator}
        microwave={microwave}
        gas={gas}
        water={water}
        transmission={transmission}
        engine={engine}
        isFeatures
      />
      <div className={styles.details}>
        <Typography variant="h3" component="p" className={styles.title}>
          Vehicle details
        </Typography>
        <ul>
          {details.map(({ label, value }) => (
            <li key={label + value} className={styles.item}>
              <Typography variant="body2" component="div">
                {label}
              </Typography>
              <Typography variant="body2" component="div">
                {value}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
