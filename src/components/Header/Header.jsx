import { Link, useLocation } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <header className={css.header}>
      <div className={isHome ? css.fullWidth : css.container}>
        <div className={css.left}>
          <nav className={css.title}>
            {' '}
            <Link to="/"> TravelTrucks</Link>
          </nav>
        </div>
        <div className={css.pages}>
          <nav
            className={`${css.page} ${
              location.pathname === '/' ? css.active : ''
            }`}
          >
            <Link to="/">Home</Link>
          </nav>
          <nav
            className={`${css.page} ${
              location.pathname === '/catalog' ? css.active : ''
            }`}
          >
            <Link to="/catalog">Catalog</Link>
          </nav>
        </div>
        <div className={css.right}></div>
      </div>
    </header>
  );
};

export default Header;
