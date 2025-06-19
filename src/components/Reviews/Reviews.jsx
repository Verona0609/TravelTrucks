import { Icon } from '../Icon/Icon';
import css from './Rewiews.module.css';

const Reviews = ({ camper }) => {
  if (!camper || !camper.reviews) return null;
  return (
    <div className={css.box}>
      <ul className={css.list}>
        {camper.reviews.map((review, index) => (
          <li key={index} className={css.item}>
            <div className={css.header}>
              <div className={css.avatar}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div>
                <span className={css.name}>{review.reviewer_name}</span>
                <span className={css.rating}>
                  {Array.from({ length: review.reviewer_rating }).map(
                    (_, i) => (
                      <Icon className={css.iconstar} id="icon-star" size={16} />
                    )
                  )}
                </span>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
