import { useEffect, useState } from 'react';
import CamperCard from '../CamperCard/CamperCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers, resetCampers } from '../../slices/camperSlice';
import css from './CamperList.module.css';

const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(state => state.campers.items);
  const loading = useSelector(state => state.campers.loading);
  const error = useSelector(state => state.campers.error);
  const filters = useSelector(state => state.filters);

  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 3;

  useEffect(() => {
    dispatch(resetCampers());
    setPage(1);
    dispatch(fetchCampers({ ...filters, page: 1, limit: ITEMS_PER_PAGE }));
  }, [dispatch]);

  const loadMore = event => {
    event.preventDefault();
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(
      fetchCampers({
        ...filters,
        page: nextPage,
        limit: ITEMS_PER_PAGE,
        append: true,
      })
    );
  };

  return (
    <div>
      {loading && campers.length === 0 && <div>Loading campers...</div>}

      {!loading && error && <div>Error: {error}</div>}

      {!loading && !error && campers.length === 0 && (
        <div>No campers found.</div>
      )}

      {campers.length > 0 && (
        <div>
          {campers.map(camper => (
            <CamperCard key={camper.id} camper={camper} />
          ))}

          {loading && <div>Loading campers...</div>}

          {!loading && campers.length % ITEMS_PER_PAGE === 0 && (
            <div className={css.wrapper}>
              <button onClick={loadMore} className={css.loadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CamperList;
