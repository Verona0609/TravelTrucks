import { Link } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>TravelTrucks</h3>
      <div className={css.pages}>
        <p className={css.home}>
          <Link to="/home">Home</Link>
        </p>
        <p className={css.catalog}>
          <Link to="/catalog">Catalog</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
