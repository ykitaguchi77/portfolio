import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ExpertiseSection from './components/ExpertiseSection';
import Affiliation from './components/Skills';
import RecentWork from './components/RecentWork';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ExpertiseSection />
              <Affiliation />
              <RecentWork />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
