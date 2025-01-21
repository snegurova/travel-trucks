import { Suspense } from 'react';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import CamperDetailsPage from '../../pages/CamperDetailsPage/CamperDetailsPage';

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id/*" element={<CamperDetailsPage />}></Route>
          <Route path="*" element={<div>NotFoundPage</div>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
