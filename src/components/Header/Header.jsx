import { Link, useLocation } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <header className={css.header}>
      <div className={isHome ? css.fullWidth : css.container}>
        <h3 className={css.title}>TravelTrucks</h3>
        <div className={css.pages}>
          <nav className={css.page}>
            <Link to="/">Home</Link>
          </nav>
          <nav className={css.page}>
            <Link to="/catalog">Catalog</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
