/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { CustomLab } from './pages/CustomLab';
import { Events } from './pages/Events';
import { Story } from './pages/Story';
import { RSE } from './pages/RSE';
import { Ambassadors } from './pages/Ambassadors';
import { Realisations } from './pages/Realisations';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/custom" element={<CustomLab />} />
          <Route path="/events" element={<Events />} />
          <Route path="/story" element={<Story />} />
          <Route path="/rse" element={<RSE />} />
          <Route path="/ambassadeurs" element={<Ambassadors />} />
          <Route path="/realisations" element={<Realisations />} />
        </Routes>
      </Layout>
    </Router>
  );
}
