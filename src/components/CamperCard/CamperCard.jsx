import { Icon } from '../Icon/Icon';

const CamperCard = () => {
  return (
    <div className={css.card}>
      <img src={camper.image} alt={camper.name} className={css.image} />

      <div className={css.header}>
        <h2 className={css.title}>{camper.name}</h2>
        <div className={css.priceBox}>
          <p className={css.price}>{camper.price}</p>
          <button className={css.favoriteBtn}>
            <Icon className={css.iconheart} id="" size={24} />
          </button>
        </div>
      </div>
      <div className={css.details}>
        <button>
          <Icon className={css.iconstar} id="" size={16} />
          <p className={css.rating}>{camper.rating}</p>
          <p className={css.reviews}>{camper.reviews}</p>
        </button>
        <div>
          <Icon className={css.iconloc} id="icon-Map" size={20} />
          <p className={css.location}>{camper.location}</p>
        </div>
      </div>
      <p className={css.description}>{camper.description}</p>
      <ul className={css.filterlist}>
        <li className={css.filterItem}>
          <Icon className={css.iconId} id={camper.filter} size={20} />
          <p>{camper.filterName}</p>
        </li>
      </ul>
      <button className={css.btn}>Show more</button>
    </div>
  );
};

export default CamperCard;
