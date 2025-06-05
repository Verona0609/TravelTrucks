import { selectIsLoading } from '../../selectors/selectors';
import { Icon } from '../Icon/Icon';
import css from './CatalogId.module.css';

const CatalogId = ({ camper }) => {
  const isLoading = useSelector(selectIsLoading);
  if (!camper) return null;
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

  return (
    <div className={css.camperList}>
      {isLoading && <Loader />}
      <div className={css.card}>
        <div className={css.image}>
          <img src={gallery[0]?.original} alt={name} className={css.image} />
        </div>
        <div className={css.about}>
          <div className={css.header}>
            <h2 className={css.title}>{camper.name}</h2>
            <div className={css.priceBox}>
              <p className={css.price}>${camper.price}.00</p>
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
        </div>
      </div>
    </div>
  );
};

export default CatalogId;

/*
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
    water : 'icon-water',
}
  /*   const activeFilters = Object.entries(optionsMap)
    .filter(([key]) => camper[key])
    .map(([key, icon]) => ({
      name: key,
      icon,
    })); */
