import { useDispatch } from 'react-redux';
import { Icon } from '../Icon/Icon';
import css from './Filter.module.css';
const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <p className={css.location}>Location</p>
      <div className={css.inputContainer}>
        <Icon className={css.iconloc} id="icon-Map" size={20} />
        <input className={css.inputloc} type="text" placeholder="City" />
      </div>

      <p className={css.title}>Filters</p>
      <div>
        <h3 className={css.name}>Vehicle equipment</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <Icon className={css.icon} id="icon-wind" size={32} />
            <p>AC</p>
          </li>
          <li className={css.item}>
            <Icon className={css.icon} id="icon-diagram" size={32} />
            <p>Automatic</p>
          </li>
          <li className={css.item}>
            <Icon className={css.icon} id="icon-cup-hot" size={32} />
            <p>Kitchen</p>
          </li>
          <li className={css.item}>
            <Icon className={css.icon} id="icon-tv" size={32} />
            <p>TV</p>
          </li>
          <li className={css.item}>
            <Icon className={css.icon} id="icon-ph_shower" size={32} />
            <p>Bathroom</p>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={css.name}>Vehicle type</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <Icon className={css.icon} id="icon-bi_grid-1x2" size={32} />
            <p>Van</p>
          </li>
          <li className={css.item}>
            <Icon className={css.icon} id="icon-bi_grid" size={32} />
            <p>Fully Integrated</p>
          </li>
          <li className={css.item}>
            <Icon className={css.icon} id="icon-bi_grid-3x3-gap" size={32} />
            <p>Alcove</p>
          </li>
        </ul>
      </div>
      <button type="submit" className={css.btn}>
        Search
      </button>
    </div>
  );
};

export default Filter;
