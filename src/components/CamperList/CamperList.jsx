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

  const optionKeyMap = {
    AC: 'ac',
    TV: 'tv',
    Kitchen: 'kitchen',
    Bathroom: 'bathroom',
    Automatic: 'automatic',
  };
  //Завантаження даних при монтуванні
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const filteredCampers = campers.filter(camper => {
    const matchesLocation =
      !filters.location ||
      camper.location.toLowerCase().includes(filters.location.toLowerCase());

    const matchesType =
      !filters.vehicleType ||
      camper.form?.toLowerCase() === filters.vehicleType.toLowerCase();

    const matchesOption =
      filters.options.length === 0 ||
      filters.options.every(opt => camper[optionKeyMap[opt].toLowerCase()]);

    return matchesLocation && matchesType && matchesOption;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (filteredCampers.length === 0) return <div>No campers found.</div>;

  return (
    <div>
      {filteredCampers.map(camper => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default CamperList;
