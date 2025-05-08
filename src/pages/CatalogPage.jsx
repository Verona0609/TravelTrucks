import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import CamperList from '../components/CamperList/CamperList';

const CatalogPage = () => {
  return (
    <>
      <Header />
      <div className="container" style={{ display: 'flex', gap: '64px' }}>
        <Filter />
        <CamperList />
      </div>
    </>
  );
};

export default CatalogPage;
