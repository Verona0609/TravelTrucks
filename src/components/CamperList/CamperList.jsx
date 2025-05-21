import { useEffect } from 'react';
import CamperCard from '../CamperCard/CamperCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../slices/camperSlice';

const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(state => state.campers.items);
  const loading = useSelector(state => state.campers.loading);
  const error = useSelector(state => state.campers.error);
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit: 4 }));
  }, []);

  if (loading || !Array.isArray(campers)) return <div>Loading campers...</div>;
  if (error) return <div>Error: {error}</div>;
  if (campers.length === 0) return <div>No campers found.</div>;

  return (
    <div>
      {campers.map(camper => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default CamperList;
