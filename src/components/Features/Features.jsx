import { Icon } from '../Icon/Icon';
import css from './Features.module.css';

const Features = ({ camper }) => {
  if (!camper) return null;
  console.log('camper in Features:', camper);
  const optionsMap = {
    AC: 'icon-wind',
    automatic: 'icon-diagram',
    kitchen: 'icon-cup-hot',
    TV: 'icon-tv',
    bathroom: 'icon-ph_shower',
    petrol: 'icon-fuel-pump',
    radio: 'icon-radios',
    refrigerator: 'icon-fridge',
    microwave: 'icon-microwave',
    gas: 'icon-gas-stove',
    water: 'icon-water',
  };
  const activeFilters = Object.entries(optionsMap)
    .filter(([key]) => camper[key])
    .map(([key, icon]) => ({
      name: key,
      icon,
    }));

  const vehicleDetails = [
    { label: 'Form', value: camper.form },
    { label: 'Length', value: camper.length },
    { label: 'Width', value: camper.width },
    { label: 'Height', value: camper.height },
    { label: 'Tank', value: camper.tank },
    { label: 'Consumption', value: camper.consumption },
  ];
  return (
    <div className={css.box}>
      {activeFilters.length > 0 && (
        <ul className={css.filterlist}>
          {activeFilters.map((filter, index) => (
            <li key={index} className={css.filterItem}>
              <Icon
                className={css.iconId}
                id={filter.icon}
                size={20}
                style={{ color: '#100' }}
              />
              <p>{filter.name}</p>
            </li>
          ))}
        </ul>
      )}
      <div>
        <h3 className={css.details}>Vehicle details</h3>
        <hr className={css.divider} />
        <ul className={css.vehicleList}>
          {vehicleDetails.map((item, index) => (
            <li key={index} className={css.vehicleItem}>
              <span className={css.vehicleLabel}>{item.label}:</span>
              <span className={css.vehicleLabel}>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
