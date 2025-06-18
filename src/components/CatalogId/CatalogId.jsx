import { selectIsLoading } from '../../selectors/selectors';
import { Icon } from '../Icon/Icon';
import css from './CatalogId.module.css';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearCamper, fetchCamperById } from '../../slices/camperIdSlice';
import Loader from '../Loader/Loader';
import Features from '../Features/Features';

const CatalogId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { camper, loading, error } = useSelector(state => state.camperById);

  useEffect(() => {
    dispatch(fetchCamperById(id));

    return () => {
      dispatch(clearCamper());
    };
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!camper) return null;

  const {
    gallery = [],
    name = '',
    price = 0,
    rating = 0,
    reviews = [],
    location = '',
    description = '',
  } = camper;

  return (
    <div className={css.camperList}>
      <div className={css.card}>
        <div className={css.about}>
          <div className={css.header}>
            <h2 className={css.title}>{name}</h2>
          </div>

          <div className={css.details}>
            <Icon className={css.iconstar} id="icon-star" size={16} />
            <p className={css.ratingText}>
              {rating} ({reviews?.length || 0} Reviews)
            </p>

            <Icon className={css.iconloc} id="icon-Map" size={16} />
            <p className={css.location}>{location}</p>
          </div>
          <div className={css.priceBox}>
            <p className={css.price}>${price}.00</p>
          </div>
          <div className={css.images}>
            <img src={gallery[0]?.original} alt={name} className={css.image} />
            <img src={gallery[1]?.original} alt={name} className={css.image} />
            <img src={gallery[2]?.original} alt={name} className={css.image} />
          </div>
          <div className={css.boxDescription}>
            <p className={css.description}>{description}</p>
          </div>
        </div>
      </div>
      <Features camper={camper} />
    </div>
  );
};

export default CatalogId;
