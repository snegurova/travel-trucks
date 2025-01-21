import clsx from 'clsx';
import ACIcon from '../../icons/AC';
import BathroomIcon from '../../icons/Bathroom';
import EngineIcon from '../../icons/Engine';
import GasIcon from '../../icons/Gas';
import KitchenIcon from '../../icons/Kitchen';
import MicrowaveIcon from '../../icons/Microwave';
import RadioIcon from '../../icons/Radio';
import RefrigeratorIcon from '../../icons/Refrigerator';
import TransmissionIcon from '../../icons/Transmission';
import TVIcon from '../../icons/TV';
import WaterIcon from '../../icons/Water';
import Typography from '../Typography/Typography';
import styles from './Tags.module.css';

const Tags = (props) => {
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
    isFeatures,
  } = props;
  const tags = [
    {
      isShown: transmission === 'automatic',
      label: 'automatic',
      icon: <TransmissionIcon width="20" height="20" />,
    },
    {
      isShown: !!engine,
      label: engine,
      icon: <EngineIcon />,
    },
    {
      isShown: !!AC,
      label: 'AC',
      icon: <ACIcon width="20" height="20" />,
    },
    {
      isShown: !!bathroom,
      label: 'bathroom',
      icon: <BathroomIcon width="20" height="20" />,
    },
    {
      isShown: !!kitchen,
      label: 'kitchen',
      icon: <KitchenIcon width="20" height="20" />,
    },
    {
      isShown: !!TV,
      label: 'TV',
      icon: <TVIcon width="20" height="20" />,
    },
    {
      isShown: !!radio,
      label: 'radio',
      icon: <RadioIcon width="20" height="20" />,
    },
    {
      isShown: !!refrigerator,
      label: 'refrigerator',
      icon: <RefrigeratorIcon width="20" height="20" />,
    },
    {
      isShown: !!microwave,
      label: 'microwave',
      icon: <MicrowaveIcon width="20" height="20" />,
    },
    {
      isShown: !!gas,
      label: 'gas',
      icon: <GasIcon width="20" height="20" />,
    },
    {
      isShown: !!water,
      label: 'water',
      icon: <WaterIcon width="20" height="20" />,
    },
  ];
  return (
    <div className={styles.tags}>
      {tags.map(({ isShown, icon, label }) => {
        return (
          isShown && (
            <div
              key={`${label}-tag`}
              className={clsx(styles.tag, {
                [styles.features]: isFeatures,
              })}
            >
              {icon}
              <Typography variant="body2" color="main">
                {label}
              </Typography>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Tags;
