import { Link } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.container}>
      <h3 className={css.title}>TravelTrucks</h3>
      <div className={css.pages}>
        <nav className={css.page}>
          <Link to="/">Home</Link>
        </nav>
        <nav className={css.page}>
          <Link to="/catalog">Catalog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
