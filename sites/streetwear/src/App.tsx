import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Custom } from './pages/Custom';
import { Story } from './pages/Story';
import { Events } from './pages/Events';
import { RSE } from './pages/RSE';
import { Ambassadors } from './pages/Ambassadors';
import { Realisations } from './pages/Realisations';
import { Franchises } from './pages/Antennes';

const ProductDetail = lazy(() => import('./pages/ProductDetail'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-sm">Chargement…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/textile" element={<Shop />} />
            <Route path="/textile/:productRef" element={<ProductDetail />} />
            <Route path="/goodies" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/story" element={<Story />} />
            <Route path="/events" element={<Events />} />
            <Route path="/jabb-green" element={<RSE />} />
            <Route path="/rse" element={<RSE />} />
            <Route path="/ambassadeurs" element={<Ambassadors />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/antennes" element={<Franchises />} />
            <Route path="/franchises" element={<Franchises />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
