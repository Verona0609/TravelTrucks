import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../Icon/Icon';
import css from './Filter.module.css';
import {
  setLocation,
  setVehicleType,
  toggleOption,
} from '../../slices/filterSlice';
const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Фільтр для пощуку:', filters);
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
    { name: 'AC', iconId: 'icon-wind' },
    { name: 'Automatic', iconId: 'icon-diagram' },
    { name: 'Kitchen', iconId: 'icon-cup-hot' },
    { name: 'TV', iconId: 'icon-tv' },
    { name: 'Bathroom', iconId: 'icon-ph_shower' },
  ];
  const vehicleType = [
    { name: 'Van', iconId: 'icon-bi_grid-1x2' },
    { name: 'Fully Integrated', iconId: 'icon-bi_grid' },
    { name: 'Alcove', iconId: 'icon-bi_grid-3x3-gap' },
  ];
  return (
    <form className={css.filter} onSubmit={handleSubmit}>
      <p className={css.location}>Location</p>
      <div className={css.inputContainer}>
        <Icon className={css.iconloc} id="icon-Map" size={20} />
        <input
          className={css.inputloc}
          type="text"
          placeholder="City"
          value={filters.location}
          onChange={handleLocationChange}
        />
      </div>

      <p className={css.title}>Filters</p>
      <div>
        <h3 className={css.name}>Vehicle equipment</h3>
        <ul className={css.list}>
          {vehicleOption.map(option => (
            <li
              key={option.name}
              className={css.item}
              onClick={() => handleOptionClick(option.name)}
            >
              <Icon className={css.icon} id={option.iconId} size={32} />
              <p>{option.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={css.name}>Vehicle type</h3>
        <ul className={css.list}>
          {vehicleType.map(({ name, iconId }) => (
            <li
              key={name}
              className={css.item}
              onClick={() => handleVericleClick(name)}
            >
              <Icon className={css.icon} id={iconId} size={32} />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
};

export default Filter;
