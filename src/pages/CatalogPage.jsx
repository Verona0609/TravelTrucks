import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';

const CatalogPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Filter />
      </div>
    </>
  );
};

export default CatalogPage;
