import React from 'react';
import { NavigationProvider } from './context/NavigationContext';
import Layout from './components/Layout/Layout';
import HeroSection from './components/Home/HeroSection';
import Dashboard from './components/Dashboard/Dashboard';
import PredictionForm from './components/Prediction/PredictionForm';
import InfoSection from './components/Home/InfoSection';
import AboutSection from './components/About/AboutSection';

import './App.css';

function App() {
  return (
    <NavigationProvider>
      <Layout>
        <HeroSection />
        <Dashboard />
        <PredictionForm />
        <InfoSection />
        <AboutSection />
      </Layout>
    </NavigationProvider>
  );
}

export default App;