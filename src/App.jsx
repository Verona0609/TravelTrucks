import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
};

export default App;
