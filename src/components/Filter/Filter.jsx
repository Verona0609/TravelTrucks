import css from './Filter.module.css';
const Filter = () => {
  return (
    <div className={css.filter}>
      <div className={css.location}>
        <p className={css.title}>Location</p>
        <input className={css.input} type="text" placeholder="Kyiv, Ukraine" />
      </div>
      <p className={css.title}>Filters</p>
      <div>
        <h3 className={css.name}>Vehicle equipment</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <p>AC</p>
          </li>
          <li className={css.item}>Automatic</li>
          <li className={css.item}>Kitchen</li>
          <li className={css.item}>TV</li>
          <li className={css.item}>Bathroom </li>
        </ul>
      </div>
      <div>
        <h3 className={css.name}>Vehicle type</h3>
        <ul className={css.list}>
          <li className={css.item}>Van</li>
          <li className={css.item}>Fully Integrated</li>
          <li className={css.item}>Alcove</li>
        </ul>
      </div>
      <button type="submit">Search</button>
    </div>
  );
};

export default Filter;
