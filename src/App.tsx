import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShirtsPage from './pages/ShirtsPage';
import TShirtsPage from './pages/TShirtsPage';
import TrousersJeansPage from './pages/TrousersJeansPage';
import ShoesPage from './pages/ShoesPage';
import ShortsTracksPage from './pages/ShortsTracksPage';
import WatchesAccessoriesPage from './pages/WatchesAccessoriesPage';
import EthnicWearPage from './pages/EthnicWearPage';
import SuitsBlazersPage from './pages/SuitsBlazersPage';
import WinterWearPage from './pages/WinterWearPage';
import GymFitnessPage from './pages/GymFitnessPage';
import GroomingPage from './pages/GroomingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shirts" element={<ShirtsPage />} />
            <Route path="/t-shirts" element={<TShirtsPage />} />
            <Route path="/trousers-jeans" element={<TrousersJeansPage />} />
            <Route path="/shoes-sneakers" element={<ShoesPage />} />
            <Route path="/shorts-tracks" element={<ShortsTracksPage />} />
            <Route path="/watches-accessories" element={<WatchesAccessoriesPage />} />
            <Route path="/ethnic-wear" element={<EthnicWearPage />} />
            <Route path="/suits-blazers" element={<SuitsBlazersPage />} />
            <Route path="/winter-wear" element={<WinterWearPage />} />
            <Route path="/gym-fitness" element={<GymFitnessPage />} />
            <Route path="/grooming" element={<GroomingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;