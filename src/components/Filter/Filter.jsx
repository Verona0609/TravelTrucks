import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../Icon/Icon';
import css from './Filter.module.css';
import {
  setLocation,
  setVehicleType,
  toggleOption,
} from '../../slices/filterSlice';
import { fetchCampers, resetCampers } from '../../slices/camperSlice';
const Filter = () => {
  const dispatch = useDispatch();

  const filters = useSelector(state => state.filters);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(resetCampers());
    dispatch(fetchCampers(filters));
  };

  const handleLocationChange = e => {
    dispatch(setLocation(e.target.value));
  };

  // Обробка натискання на тип транспортного засобу
  const handleVericleClick = type => {
    dispatch(setVehicleType(type));
  };
  // Обробка натискання на опції (AC, TV, Kitchen тощо)
  const handleOptionClick = option => {
    dispatch(toggleOption(option));
  };

  const vehicleOption = [
    { name: 'AC', apiValue: 'AC', iconId: 'icon-wind' },

    {
      name: 'Automatic',

      apiValue: 'transmission',
      iconId: 'icon-diagram',
    },
    { name: 'Kitchen', apiValue: 'kitchen', iconId: 'icon-cup-hot' },
    { name: 'TV', apiValue: 'TV', iconId: 'icon-tv' },
    { name: 'Bathroom', apiValue: 'bathroom', iconId: 'icon-ph_shower' },
  ];
  const vehicleType = [
    { name: 'Van', apiValue: 'panelTruck', iconId: 'icon-bi_grid-1x2' },
    {
      name: 'Fully Integrated',
      apiValue: 'integrated',
      iconId: 'icon-bi_grid',
    },
    { name: 'Alcove', apiValue: 'alcove', iconId: 'icon-bi_grid-3x3-gap' },
  ];
  return (
    <form className={css.filter} onSubmit={handleSubmit}>
      <p className={css.location}>Location</p>
      {/* location */}
      <div className={css.inputContainer}>
        <Icon
          className={`${css.iconloc} ${filters.location ? css.iconActive : ''}`}
          id="icon-Map"
          size={20}
        />
        <input
          className={css.inputloc}
          type="text"
          placeholder="City"
          value={filters.location}
          onChange={handleLocationChange}
        />
      </div>
      {/* options */}
      <p className={css.title}>Filters</p>
      <div>
        <h3 className={css.name}>Vehicle equipment</h3>
        <ul className={css.list}>
          {vehicleOption.map(option => {
            const isActive = filters.options.includes(option.apiValue);

            return (
              <li
                key={option.name}
                className={`${css.item} ${isActive ? css.itemActive : ''}`}
                onClick={() => handleOptionClick(option.apiValue)}
              >
                <Icon className={css.icon} id={option.iconId} size={32} />
                <p>{option.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      {/* type */}
      <div>
        <h3 className={css.name}>Vehicle type</h3>
        <ul className={css.list}>
          {vehicleType.map(({ name, apiValue, iconId }) => {
            const isActive = filters.vehicleType === apiValue;
            return (
              <li
                key={name}
                className={`${css.item} ${isActive ? css.itemActive : ''}`}
                onClick={() => handleVericleClick(apiValue)}
              >
                <Icon className={css.icon} id={iconId} size={32} />
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
};

export default Filter;
