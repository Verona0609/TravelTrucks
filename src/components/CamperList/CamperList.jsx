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

  useEffect(() => {
    dispatch(resetCampers());
    setPage(1);
    dispatch(fetchCampers({ ...filters, page: 1, limit: 3 }));
  }, [dispatch]);

  useEffect(() => {
    if (page > 1 && !loading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [page]);

  const loadMore = event => {
    event.preventDefault();
    const nextPage = page + 1;

    setPage(nextPage);
    dispatch(
      fetchCampers({ ...filters, page: nextPage, limit: 3, append: true })
    );
  };

  return (
    <div>
      {loading && campers.length === 0 && <div>Loading campers...</div>}

      {!loading && error && <div>Error: {error}</div>}

      {!loading && campers.length === 0 && <div>No campers found.</div>}

      {campers.length > 0 &&
        campers.map(camper => <CamperCard key={camper.id} camper={camper} />)}

      {loading && campers.length > 0 && <div>Loading campers...</div>}

      {!loading && campers.length > 0 && (
        <div className={css.wrapper}>
          <button
            onClick={loadMore}
            disabled={loading}
            className={css.loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CamperList;
