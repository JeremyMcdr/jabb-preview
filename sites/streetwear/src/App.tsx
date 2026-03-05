import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Custom } from './pages/Custom';
import { Story } from './pages/Story';
import { Events } from './pages/Events';
import { RSE } from './pages/RSE';
import { Ambassadors } from './pages/Ambassadors';
import { Realisations } from './pages/Realisations';
import { Antennes } from './pages/Antennes';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/story" element={<Story />} />
          <Route path="/events" element={<Events />} />
          <Route path="/rse" element={<RSE />} />
          <Route path="/ambassadeurs" element={<Ambassadors />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/antennes" element={<Antennes />} />
        </Routes>
      </Layout>
    </Router>
  );
}
