import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  const {
    gallery = [],
    name = '',
    price = 0,
    rating = 0,
    reviews = [],
    location = '',
    description = '',
    AC,
    kitchen,
    TV,
    bathroom,
    radio,
    microwave,
    refrigerator,
    gas,
    water,
  } = camper;

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

  return (
    <div className={css.camperList}>
      <div className={css.card}>
        <div className={css.image}>
          <img
            src={camper.gallery[0]?.thumb}
            alt={camper.name}
            className={css.image}
          />
        </div>
        <div className={css.about}>
          <div className={css.header}>
            <h2 className={css.title}>{camper.name}</h2>
            <div className={css.priceBox}>
              <p className={css.price}>${camper.price}.00</p>
              <button className={css.favoriteBtn}>
                <Icon className={css.iconheart} id="icon-heart" size={22} />
              </button>
            </div>
          </div>

          <div className={css.details}>
            <Icon className={css.iconstar} id="icon-star" size={16} />
            <p className={css.ratingText}>
              {camper.rating} ({camper.reviews?.length || 0} Reviews)
            </p>

            <Icon className={css.iconloc} id="icon-Map" size={16} />
            <p className={css.location}>{camper.location}</p>
          </div>

          <p className={css.description}>{camper.description}</p>

          {/* 💡 Динамічно згенеровані фільтри */}
          {activeFilters.length > 0 && (
            <ul className={css.filterlist}>
              {activeFilters.map((filter, index) => (
                <li key={index} className={css.filterItem}>
                  <Icon className={css.iconId} id={filter.icon} size={20} />
                  <p>{filter.name}</p>
                </li>
              ))}
            </ul>
          )}
          <Link to="/catalog/:id">
            <button className={css.btn}>Show more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
