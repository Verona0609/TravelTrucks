import { useEffect, useState } from 'react';
import CamperCard from '../CamperCard/CamperCard';

const CamperList = () => {
  const [campers, setCampers] = useState([]);
  const api = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setCampers(data.items);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  if (!campers || campers.length === 0) {
    return <div>Loading...</div>; // Якщо немає кемперів, показуємо повідомлення
  }

  return (
    <div>
      {campers.map(camper => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default CamperList;
