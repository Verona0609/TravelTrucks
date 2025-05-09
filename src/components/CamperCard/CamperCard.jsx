import { Icon } from '../Icon/Icon';
import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  console.log(camper);
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
          <ul className={css.filterlist}>
            {camper.filters?.map((filter, index) => (
              <li key={index} className={css.filterItem}>
                <Icon className={css.iconId} id={filter.icon} size={20} />
                <p>{filter.name}</p>
              </li>
            ))}
          </ul>
          <button className={css.btn}>Show more</button>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
